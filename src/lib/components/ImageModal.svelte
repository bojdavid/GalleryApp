<script>
    import { getModalStore } from '@skeletonlabs/skeleton';
	
    const modalStore = getModalStore();

    let galleryItem = $modalStore[0]["props"]["galleryItem"]
    const addFavourites = $modalStore[0]["props"]["addFavourites"]
    
    let isfav = localStorage.getItem('isfav') === "true";
    console.log(isfav)

    let favourite = $state("");
    if(isfav){ favourite= ""}
    else{ favourite="bg-primary-500"}
    
    
    
    const addFav_ = () =>{
        
        addFavourites()
        //console.log("Modal comp--------", localStorage.getItem('isfav') === "true")
        if(localStorage.getItem('isfav') === "true"){
            favourite = "" 
        }
        else{ favourite = "bg-primary-500"}
    }
    
</script>

<div class="bg-surface-100 dark:bg-surface-800 py-6 px-4 shadow-lg rounded-md flex flex-col gap-3">
    <div class="flex flex-row justify-between text-xs sm:text-xl mb-5">
        <div>
            <div>Image Id: <span>{galleryItem.id}</span></div>
            <div>Photographer: <a class="underline hover:text-surface-300" href="{galleryItem.photographer_url}">{galleryItem.photographer}</a></div>
        </div>
        <button onclick={addFav_}
                class=" rounded-lg
                        border border-primary-200 hover:border-primary-500 p-2 hover:bg-surface-600 
                        transition duration-300 ease-in-out
                        {favourite}">
            Favourite
        </button>
    </div>
    <img src="{galleryItem.src.large}" alt="{galleryItem.alt}">

    <button onclick={() => modalStore.close()}
                class=" rounded-lg align-center w-[100px] mx-auto
                        border border-primary-200 hover:border-primary-500 p-2 hover:bg-red-700
                        transition duration-300 ease-in-out
                        bg-red-600">
            Close
        </button>
</div>