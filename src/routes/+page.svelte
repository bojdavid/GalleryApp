<script>
    import { onMount } from 'svelte';
    
    import "../styles/app.css";
    import ImageContainer from '$lib/components/imageContainer.svelte';
    import ImageModal from "../lib/components/ImageModal.svelte"
    import Tabs from '$lib/components/Tabs_.svelte';
    import Query from '$lib/components/Query.svelte';

    import { PUBLIC_KEY } from '$env/static/public';
    import { createClient } from 'pexels';
    
    import { initializeStores, Modal } from '@skeletonlabs/skeleton';
    import { LightSwitch } from '@skeletonlabs/skeleton';import { getModalStore } from '@skeletonlabs/skeleton';
			
    
    initializeStores();
    const modalRegistry= {
	    ImageModal: {ref: ImageModal}
	};

    const client = createClient("ce4sFyrxgqsj9NXgiyu4b83jDnIlZgsKKNrI26hEZVH1eXLRMMWRqbxM");



    // Sample gallery items
    let galleryItems = $state([
        {
            alt: "Hot air balloons float over the mesmerizing landscape of Cappadocia, Turkey at sunrise.",
            avg_color: "#85928B",
            height: 3456,
            id: 2325447,
            liked: false,
            photographer: "Francesco Ungaro",
            photographer_id: 21273,
            photographer_url: "https://www.pexels.com/@francesco-ungaro",
            src: {
                original: "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg",
                large2x: "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                large: "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                medium: "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&h=350",
                small: "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&h=130"
            },
            url: "https://www.pexels.com/photo/hot-air-balloon-2325447/",
            width: 5184
        },
        {
            alt: "A hand painted green holds a fresh plant sprout against a light background, symbolizing growth and sustainability.",
            avg_color: "#DFE0D9",
            height: 2642,
            id: 886521,
            liked: false,
            photographer: "Alena Koval",
            photographer_id: 233944,
            photographer_url: "https://www.pexels.com/@alena-koval-233944",
            src: {
                original: "https://images.pexels.com/photos/886521/pexels-photo-886521.jpeg",
                large2x: "https://images.pexels.com/photos/886521/pexels-photo-886521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                large: "https://images.pexels.com/photos/886521/pexels-photo-886521.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                medium: "https://images.pexels.com/photos/886521/pexels-photo-886521.jpeg?auto=compress&cs=tinysrgb&h=350",
                small: "https://images.pexels.com/photos/886521/pexels-photo-886521.jpeg?auto=compress&cs=tinysrgb&h=130"
            },
            url: "https://www.pexels.com/photo/person-s-left-hand-holding-green-leaf-plant-886521/",
            width: 4110
        },
        {
            alt: "A hummingbird hovers gracefully near a blooming red hibiscus, showcasing nature's delicate beauty.",
            avg_color: "#685456",
            height: 2389,
            id: 1133957,
            liked: false,
            photographer: "Philippe Donn",
            photographer_id: 230606,
            photographer_url: "https://www.pexels.com/@philippedonn",
            src: {
                original: "https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg",
                large2x: "https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                large: "https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                medium: "https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&h=350",
                small: "https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&h=130"
            },
            url: "https://www.pexels.com/photo/brown-hummingbird-selective-focus-photography-1133957/",
            width: 3579
        },
        {
            alt: "A beautiful spring garden landscape featuring vibrant pink flowers, a serene river, and a picturesque bridge.",
            avg_color: "#575C56",
            height: 1376,
            id: 158063,
            liked: false,
            photographer: "Pixabay",
            photographer_id: 2659,
            photographer_url: "https://www.pexels.com/@pixabay",
            src: {
                original: "https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg",
                large2x: "https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                large: "https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                medium: "https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg?auto=compress&cs=tinysrgb&h=350",
                small: "https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg?auto=compress&cs=tinysrgb&h=130"
            },
            url: "https://www.pexels.com/photo/green-leafed-tree-beside-body-of-water-during-daytime-158063/",
            width: 2200
        },
        {
            alt: "An elegant young woman holding pink tulips in a serene outdoor setting, embodying natural beauty and tranquility.",
            avg_color: "#827660",
            height: 3648,
            id: 1386604,
            liked: false,
            photographer: "Tuấn Kiệt Jr.",
            photographer_id: 312601,
            photographer_url: "https://www.pexels.com/@soldiervip",
            src: {
                original: "https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg",
                large2x: "https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                large: "https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                medium: "https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&h=350",
                small: "https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&h=130"
            },
            url: "https://www.pexels.com/photo/woman-holding-pink-tulips-1386604/",
            width: 2606
        },
        {
            alt: "Delicate lily of the valley flowers arranged on textured paper, showcasing elegance and natural beauty.",
            avg_color: "#B5A280",
            height: 3672,
            id: 459335,
            liked: false,
            photographer: "Pixabay",
            photographer_id: 2659,
            photographer_url: "https://www.pexels.com/@pixabay",
            src: {
                original: "https://images.pexels.com/photos/459335/pexels-photo-459335.jpeg",
                large2x: "https://images.pexels.com/photos/459335/pexels-photo-459335.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                large: "https://images.pexels.com/photos/459335/pexels-photo-459335.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                medium: "https://images.pexels.com/photos/459335/pexels-photo-459335.jpeg?auto=compress&cs=tinysrgb&h=350",
                small: "https://images.pexels.com/photos/459335/pexels-photo-459335.jpeg?auto=compress&cs=tinysrgb&h=130"
            },
            url: "https://www.pexels.com/photo/white-orchids-459335/",
            width: 2500
        },
        {
            alt: "Beautiful cherry blossoms in full bloom on a clear spring day with a vibrant blue sky background.",
            avg_color: "#ACB0CF",
            height: 3648,
            id: 250591,
            liked: false,
            photographer: "John-Mark Smith",
            photographer_id: 57844,
            photographer_url: "https://www.pexels.com/@jmark",
            src: {
                original: "https://images.pexels.com/photos/250591/pexels-photo-250591.jpeg",
                large2x: "https://images.pexels.com/photos/250591/pexels-photo-250591.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                large: "https://images.pexels.com/photos/250591/pexels-photo-250591.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                medium: "https://images.pexels.com/photos/250591/pexels-photo-250591.jpeg?auto=compress&cs=tinysrgb&h=350",
                small: "https://images.pexels.com/photos/250591/pexels-photo-250591.jpeg?auto=compress&cs=tinysrgb&h=130"
            },
            url: "https://www.pexels.com/photo/low-angle-view-of-pink-flowers-against-blue-sky-250591/",
            width: 2736
        },
        {
            alt: "Capture of vibrant pink petunias in a hanging pot against a blurred natural background.",
            avg_color: "#9EADB4",
            height: 2771,
            id: 906150,
            liked: false,
            photographer: "Min An",
            photographer_id: 206851,
            photographer_url: "https://www.pexels.com/@minan1398",
            src: {
                original: "https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg",
                large2x: "https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                large: "https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                medium: "https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?auto=compress&cs=tinysrgb&h=350",
                small: "https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?auto=compress&cs=tinysrgb&h=130"
            },
            url: "https://www.pexels.com/photo/pink-petaled-flower-plant-inside-white-hanging-pot-906150/",
            width: 4176
        },
        {
            alt: "Lush green terraced rice fields with a rustic hut under soft sunlight.",
            avg_color: "#485749",
            height: 4873,
            id: 247599,
            liked: false,
            photographer: "Pixabay",
            photographer_id: 2659,
            photographer_url: "https://www.pexels.com/@pixabay",
            src: {
                original: "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg",
                large2x: "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                large: "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                medium: "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&h=350",
                small: "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&h=130"
            },
            url: "https://www.pexels.com/photo/scenic-view-of-rice-paddy-247599/",
            width: 7301
        },
        {
            alt: "A small plant sprouts in soil inside a light bulb, symbolizing eco-friendly and sustainable growth.",
            avg_color: "#50595F",
            height: 4912,
            id: 1108572,
            liked: false,
            photographer: "Singkham",
            photographer_id: 178541,
            photographer_url: "https://www.pexels.com/@singkham-178541",
            src: {
                original: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg",
                large2x: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                large: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                medium: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&h=350",
                small: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&h=130"
            },
            url: "https://www.pexels.com/photo/clear-light-bulb-planter-on-gray-rock-1108572/",
            width: 7360
        },
        {
  "id": 2014422,
  "width": 3024,
  "height": 3024,
  "url": "https://www.pexels.com/photo/brown-rocks-during-golden-hour-2014422/",
  "photographer": "Joey Farina",
  "photographer_url": "https://www.pexels.com/@joey",
  "photographer_id": 680589,
  "avg_color": "#978E82",
  "src": {
    "original": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg",
    "large2x": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "large": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "medium": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=350",
    "small": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=130",
    "portrait": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    "landscape": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    "tiny": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
  },
  "liked": false,
  "alt": "Brown Rocks During Golden Hour"
}
]);


// Create a new list containing only the id and liked properties
let id_liked = $derived(galleryItems.map(item => ({
    id: item.id,
    inFav: false
}))
);

let error = $state();
let query = $state('Nature');
let per_page = $state(40);
let page = $state(1);
let fav = $state([])
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
                console.log(galleryItems)
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
            localStorage.setItem("images", JSON.stringify(id_liked))
            /*
            const client = createClient("ce4sFyrxgqsj9NXgiyu4b83jDnIlZgsKKNrI26hEZVH1eXLRMMWRqbxM");
            let response;
            try{
                response = client.photos.search({ query, per_page: 20 })
                galleryItems = await response
                // Check if the response is ok
            }catch (err){
                error = err
                console.error("Error ------------ : ", err)
            }finally{
                console.log(galleryItems["photos"])

            }
            */
        //setupObserver();
        })

    //TABS
    let items= ['All', 'Favourites']
    let activeTab = $state('All');
    

    function handleTabChange(item) {
        fav = JSON.parse(localStorage.getItem("images"))
        activeTab = item;
        console.log(fav)
    } 
    
    // Modal component for searching for the image by ID
    const modalStore = getModalStore();
    
    let galleryItem =  {
            alt: "Hot air balloons float over the mesmerizing landscape of Cappadocia, Turkey at sunrise.",
            avg_color: "#85928B",
            height: 3456,
            id: 2325447,
            liked: false,
            photographer: "Francesco Ungaro",
            photographer_id: 21273,
            photographer_url: "https://www.pexels.com/@francesco-ungaro",
            src: {
                original: "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg",
                large2x: "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                large: "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                medium: "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&h=350",
                small: "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&h=130"
            },
            url: "https://www.pexels.com/photo/hot-air-balloon-2325447/",
            width: 5184
        }
    
    function addFavourites() {
        console.log('working')
    }

    
    let singleImageid = $state(2325447);
    let singleImageLoader = $state(false);
   
    
    const modal = {
    type: 'component',
    component: 'ImageModal',
    props: {galleryItem, addFavourites}
    }
    
    const getImage = async () =>{
        let index = favourite_images.findIndex(item => item.id === galleryItem.id)
        localStorage.setItem("active", JSON.stringify({id:favourite_images[index].id, inFav:favourite_images[index].inFav, index}))

        loading = true
        let image;
        try{
            image = await client.photos.show({ id: singleImageid })
        }catch (err){
            console.err("Got an error while loading single Image: ", err)
        }finally{
            loading = false
        }
        
        console.log("working")
        console.log(image)
        modalStore.trigger(modal)
    }
</script>



<!--        HTML        -->
<Modal components={modalRegistry}/>

        <header class="bg-surface-100 dark:bg-surface-800 py-5">
            <div class="flex flex-row justify-between w-full px-5" >
                <h1 class="h1 uppercase text-center font-bold">Gallery Project</h1>
                <LightSwitch />         
            </div>
        </header>
        
        
    <main class=" mx-auto p-4">
        <a class="underline hover:text-surface-500 transistion duration-400 ease-in-out text-[7px] sm:text-xs mb-5" href="https://www.pexels.com">Photos provided by Pexels</a>
        
        <div class="flex flex-row justify-evenly flex-wrap gap-3
                    mb-8 sticky top-0 z-10
                    bg-surface-200 dark:bg-surface-800 p-4">

            <div class="flex flex-row my-auto max-w-[700px] w-full min-w-[200px]">
                <input type="text" placeholder="Enter Image Id" bind:value={singleImageid} class="text-lg 
                                                                        w-full
                                                                        border border-primary-500
                                                                        bg-surface-100 dark:bg-surface-700 rounded-l-full pl-3
                                                                        onfocus:border-none onfocus:border-b-1">
                <button class="font-bold p-3
                                bg-surface-300 dark:bg-surface-800 
                                border border-primary-800 rounded-r-full
                                transition duration-300 ease-in-out
                                btn-click"
                                onclick={getImage}> Search</button>
            </div>

            <div class="scale-[0.9] sm:scale-100 flex flex-row justify-between "> 
                <div class="flex-grow flex justify-center my-auto ">
                  <Tabs {items} active={activeTab} ontabChange={handleTabChange} />
                </div>
          </div>
          <Query />
        </div>


       
        
            <div class="columns-2 sm:columns-3 md:columns-3 lg:columns-3  gap-5 mx-5 ">
                
                    {#if error}
                        <div class="text-md">
                            {error}
                        </div>
                    {:else if activeTab=="Favourites"}
                        {#each galleryItems as item }
                            {#each fav as f}
                                {#if f.id == item.id && f.inFav == true}
                                    <ImageContainer galleryItem={item} />
                                {/if}
                            {/each}
                        {/each}
                    {:else if activeTab=="All"}
                        {#each galleryItems as item}
                            <div class="">
                                <ImageContainer galleryItem={item} />
                            </div>
                        {/each}
                    {:else}
                        <div> Unknown</div>
                    {/if}
                <!--
                    <ImageContainer galleryItem={item} />
                -->
            </div>


            <div bind:this={sentinel}></div> 
    </main>


<style>
 .btn-click:active{
    background-color: green;
    transform: scale(0.98);
 }
</style>