<script>
    import { onMount } from 'svelte';
    import { PUBLIC_KEY } from '$env/static/public';
    
    import "../styles/app.css";
    import ImageContainer from '$lib/components/ImageContainer.svelte';
    import ImageModal from "../lib/components/ImageModal.svelte"
    import Tabs from '$lib/components/Tabs_.svelte';
    import Query from '$lib/components/Query.svelte';

    import { createClient } from 'pexels';
    
    import { initializeStores, Modal, Toast,  getModalStore, getToastStore} from '@skeletonlabs/skeleton';
    import { LightSwitch } from '@skeletonlabs/skeleton';
			
    
    initializeStores();
    const modalRegistry= {
	    ImageModal: {ref: ImageModal}
	};

    const client = createClient(`${PUBLIC_KEY}`);


    let galleryItems = $state([]);
    // Create a new list containing only the id and liked properties
    let id_liked = $state([{id:"", inFav:false}])

    let error = $state(false);
    let errorMsg = $state("");
    let query = $state('Nature');
    let per_page = $state(40);
    let page = $state(1);
    let fav = $state([])
    let loading_top = $state(true);
    let loading = $state(false);
    let sentinel;



    const loadMoreImages = async () =>{
        /* Function to get more images */
        let response, gallery;

        loading = true;
            try{
                response = await client.photos.search({ query, per_page: per_page, page: (page + 1) })
                gallery = await response
                
               
            }catch (err){
                error = err
                console.error("Error ------------ : ", err)
            }finally{
                galleryItems = [...galleryItems, ...gallery['photos']]
                
                let buffer_id_liked =  $derived( gallery['photos'].map(item => ({
                        id: item.id,
                        inFav: false
                    }))
                );

                
                const load_id_liked = () => {
                    let id_liked_mini = JSON.parse(localStorage.getItem('images'))
                    id_liked = [...id_liked_mini,...buffer_id_liked]     
                    localStorage.setItem("images", JSON.stringify(id_liked))
                }                  

                load_id_liked();
                
                loading = false
            }
        page += 1;
    }
    
    //Using IntersectionObserver API to laod more images
    function setupObserver() {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                loadMoreImages();
            }
        });
    observer.observe(sentinel);
  }


onMount(async () => {
    
    let response;
    loading_top = true;
    try{
                response = await client.photos.search({ query, per_page: 20 })
                galleryItems = await response["photos"]        
    }catch (err){
                error = true
                errorMsg = err
                console.error("Error ------------ : ", err)
    }finally{
                
                let buffer_id_liked =  $derived( galleryItems.map(item => ({
                        id: item.id,
                        inFav: false
                    }))
                );
                
                const load_id_liked = () => {

                    id_liked =buffer_id_liked;      
                    localStorage.setItem("images", JSON.stringify(id_liked))
                }

                load_id_liked();
                loading_top =false;
            }
            
        setupObserver();
        })

    //TABS
    let items= ['All', 'Favourites']
    let activeTab = $state('All');
    

    function handleTabChange(item) {
        //fav = JSON.parse(localStorage.getItem("images"))
        activeTab = item;
    } 
    

    // Modal component for searching for the image by ID
    const modalStore = getModalStore();
    //Toast component for searchig for image
    const toastStore = getToastStore();

    
    function handleFavourites (imageId) {
        fav = JSON.parse(localStorage.getItem("images"))
        fav = fav.filter(item => item.inFav);

    }
    let isfav  = $state([])
    function addFavourites(){
        let favourite_images = JSON.parse(localStorage.getItem("images")) 
    
        let index = favourite_images.findIndex(item => item.id === singleImageid)
        isfav = favourite_images[index].inFav;

        if(isfav){ 
            favourite_images[index].inFav = false
            isfav=false;
        }
        else{
            favourite_images[index].inFav = true
            isfav=true;
        }

        console.log("working ------- ")
        localStorage.setItem("images", JSON.stringify(favourite_images))
        localStorage.setItem("active", JSON.stringify({id:favourite_images[index].id, inFav:favourite_images[index].inFav, index}))

        handleFavourites(favourite_images[index].id)

    }

    
    
    let singleImageid     = $state(2325447);
    let singleImageLoader = $state(false);
    let singleImageError  = $state(false);
    let disableSearch     = $state('');
    let searchBtn
    
    let modal;

    const toast = {
        message   : 'Invalid Image Id',
        background: 'variant-filled-warning',
        position  : 'tr'
};
    
    const getImage = async () =>{
        disableSearch      = "cursor-not-allowed text-surface-700 dark:text-surface-200";
        searchBtn.disabled = true;

        singleImageLoader = true
        singleImageError  = false;
        let galleryItem;
        try{
            galleryItem = await client.photos.show({ id: singleImageid })
        }catch (err){
            singleImageError = true;
            console.error("Got an error while loading single Image: ", err)
        }finally{
            
            singleImageLoader  = false
            disableSearch      = "";
            searchBtn.disabled = false;
            
            if(singleImageError){
                toastStore.trigger(toast)
                
            }else{
                let get_elements = JSON.parse(localStorage.getItem("images"))
                let element = get_elements.filter( item => item.id == singleImageid)
                localStorage.setItem("active", JSON.stringify({id:galleryItem.id, inFav:element.inFav}))
                modal = {
                    type     : 'component',
                    component: 'ImageModal',
                    props    : {galleryItem, addFavourites}
                }

                modalStore.trigger(modal)
            }
        }

    }
</script>



<!--        HTML        -->
<Modal components={modalRegistry}/>
<Toast />

        <header class="bg-surface-100 dark:bg-surface-800 py-5">
            <div class="flex flex-row flex-wrap justify-between w-full px-5" >
                <h1 class=" h2 sm:h1 uppercase text-center font-bold">Gal<span class="text-tertiary-700 dark:text-tertiary-400 ">lery Pro</span>ject </h1>
                <a class="underline hover:text-surface-500 transistion duration-400 ease-in-out text-[7px] sm:text-xs mb-5" href="https://www.pexels.com">Photos provided by Pexels</a>
            </div>
        </header>
        
        
        <main class=" mx-auto p-2">
            <div class="flex flex-row justify-between flex-wrap gap-3
                        mb-8 sticky top-0 z-40
                        bg-surface-50 dark:bg-surface-900 shadow-lg p-4">
            
                <div class="my-auto scale-[0.7] sm:scale-100 animate-bounce">
                    <LightSwitch />         
                </div> 
                    
                
                <div class="scale-[0.7] sm:scale-100 flex flex-row justify-between "> 
                    <div class="flex-grow flex justify-center my-auto ">
                        <Tabs {items} active={activeTab} ontabChange={handleTabChange} />
                    </div>
                </div>

                <div class="flex flex-row my-auto max-w-[700px] w-full min-w-[200px] text-sm sm:text-lg">
                    <input type="text" placeholder="Enter Image Id" bind:value={singleImageid} class="
                                                                                                    w-full
                                                                                                    border border-primary-500
                                                                                                    bg-surface-100 dark:bg-surface-700 rounded-l-full pl-3
                                                                                                    onfocus:border-none onfocus:border-b-1">
                    
                    <button class="font-bold p-1 sm:p-3
                                    bg-surface-300 dark:bg-surface-800 
                                    border border-primary-800 rounded-r-full
                                    transition duration-300 ease-in-out
                                    btn-click {disableSearch}" 
                        onclick={getImage} bind:this={searchBtn}> 
                            {#if singleImageLoader}
                                Searching.....
                            {:else}
                                Search
                            {/if}
                    </button>
                </div>
            <!--
                <div class="w-full scale-50">
                    <Query />
                </div>
            -->
            </div>


       
        
            <div class="columns-2 sm:columns-3 md:columns-3 lg:columns-3 gap-3 sm:gap-5  sm:mx-5 relative">
                    {#if loading_top}
                        {#each Array(10).fill(0) as _, index}
                            <div class="animate-pulse w-full h-[150px] sm:h-[300px]  rounded-lg bg-gray-500 bg-opacity-65 mb-5">

                            </div>
                        {/each}
                    {:else if error}
                        <div class="text-lg absolute w-full   text-center">
                            <div class="">
                                {errorMsg}
                            </div>
                        </div>
                    {:else if activeTab=="Favourites"}
                        {#each galleryItems as item }
                            {#each fav as f}
                                {#if f.id == item.id && f.inFav == true}
                                    <ImageContainer galleryItem={item} {handleFavourites} />
                                {/if}
                            {/each}
                        {/each}
                    {:else if activeTab=="All"}
                        {#each galleryItems as item}
                            <div class="">
                                <ImageContainer galleryItem={item} {handleFavourites} />
                            </div>
                        {/each}
                    {:else}
                        <div> Unknown</div>
                    {/if}
            </div>

            
            <div bind:this={sentinel}></div> 
    </main>


<style>
 .btn-click:active{
    background-color: green;
    transform: scale(0.98);
 }
</style>