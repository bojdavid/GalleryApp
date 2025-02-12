<script>
    import { getModalStore } from '@skeletonlabs/skeleton';
    
	
    const modalStore = getModalStore();

    let galleryItem = $modalStore[0]["props"]["galleryItem"]
    const addFavourites = $modalStore[0]["props"]["addFavourites"]
    
    let active = JSON.parse(localStorage.getItem('active'));
    let isfav = $state(active.inFav)
    //console.log(active)

    let favourite = $state("");
    $effect(() => {
        if(!isfav){ favourite= ""}
        else{ favourite="bg-primary-500"}
    })
    
    
    
    const addFav_ = () =>{ 
        addFavourites()
        
        let active_addFav = JSON.parse(localStorage.getItem('active'));
        isfav = active_addFav.inFav
    }
    
</script>

<div class="backdrop-blur-lg py-6 px-4 shadow-lg rounded-md flex flex-col gap-3">
    <div class="flex flex-row flex-wrap justify-between text-xs sm:text-xl mb-5">
        <div class="text-surface-50">
            <div>Image Id: <span class="font-bold">{galleryItem.id}</span></div>
            <div>Photographer: <a class="underline font-bold hover:text-surface-200  " href="{galleryItem.photographer_url}">{galleryItem.photographer}</a></div>
        </div>
        <button onclick={addFav_} class="hover:scale-[1.1] transition duration-300 ease-in-out">
            {#if isfav}
                <img src="/heart.png" alt="red heart" class="w-6 sm:w-10 h-auto" >
            {:else}
                <img src="/love.png" alt="blank_heart" class="w-6 sm:w-10 h-auto" >
            {/if}
        </button>
    </div>
    <img src="{galleryItem.src.large}" alt="{galleryItem.alt}" loading="lazy">

    <button onclick={() => modalStore.close()}
                class=" rounded-full align-center w-14 h-14 mx-auto text-xl
                        border border-primary-200 hover:border-primary-500 p-1 sm:p-2 hover:bg-primary-500
                        transition duration-300 ease-in-out
                        dark:bg-primary-800 bg-primary-200 dark:hover:bg-primary-500
                        ">
            X
        </button>
</div>