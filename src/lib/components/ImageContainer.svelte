<script>
import { getModalStore } from '@skeletonlabs/skeleton';
import { onMount } from 'svelte';

			
const modalStore = getModalStore();

let {galleryItem, handleFavourites} = $props();

let favourite_images = $state([]);
let isfav = $state();
let fav = []

onMount( async () => {
    favourite_images = JSON.parse(localStorage.getItem("images"))
    let index = favourite_images.findIndex(item => item.id === galleryItem.id)
    isfav = favourite_images[index].inFav
})


const addFavourites = () => {
    favourite_images = JSON.parse(localStorage.getItem("images")) 
    
    let index = favourite_images.findIndex(item => item.id === galleryItem.id)
    isfav = favourite_images[index].inFav

    if(isfav){ 
        favourite_images[index].inFav = false
        isfav=false;
    }
    else{
        favourite_images[index].inFav = true
        isfav=true;
    }
    localStorage.setItem("images", JSON.stringify(favourite_images))
    localStorage.setItem("active", JSON.stringify({id:favourite_images[index].id, inFav:favourite_images[index].inFav, index}))

    handleFavourites(favourite_images[index].id)

}

const modal = {
    type: 'component',
    component: 'ImageModal',
    props: {galleryItem, addFavourites}
};
const expandImage = () => {
    
    let index = favourite_images.findIndex(item => item.id === galleryItem.id)
    localStorage.setItem("active", JSON.stringify({id:favourite_images[index].id, inFav:favourite_images[index].inFav, index}))

    modalStore.trigger(modal)
}
</script>

    <div class="min-w-[100px] max-w-[600px] w-full group overflow-hidden rounded-lg mb-4 shadow-lg">
        <div class="relative ">
            <div class="absolute right-0  z-20
                        sm:transform sm:translate-x-full
                        sm:group-hover:translate-x-0
                        transition duration-500 ease-in-out"> 
                
                <button class="" onclick={addFavourites}> 
                    {#if isfav}
                        <img src="/heart.png" alt="red heart" class="w-6 sm:w-10 h-auto" >
                    {:else}
                        <img src="/love.png" alt="red heart" class="w-6 sm:w-10 h-auto" >
                    {/if}
                </button>
            </div>
    
            <button onclick={expandImage} class="w-full">
                <div class="absolute top-0 r-0 l-0 b-0  w-full h-full
                            group-hover:bg-black group-hover:opacity-30 
                            transition duration-500 ease-in-out
                            z-10
                            "></div>
                <img src={galleryItem.src.medium} alt={galleryItem.alt} class="w-full rounded-lg group-hover:scale-[1.05]
                                                                               transition duration-300 ease-in-out "
                                                                        loading="lazy" >
            </button>
            
            <div class="w-full h-[2.5rem] absolute bottom-0 z-20
                        transform translate-y-full
                        group-hover:shadow-lg
                        group-hover:translate-y-0 hover:bg-opacity-100 
                        transition duration-500 ease-in-out
                        ">
                <!-- Details  -->
                 <div class="
                                p-2
                                ">
                    <div class="text-white sm:text-lg lg:text-xl">
                        Author: <span class="text-primary-500">
                            <a href="{galleryItem.photographer_url}" target="_blank" class="underline text-tertiary-500 font-bold hover:">{galleryItem.photographer}</a>
                        </span>
                    </div>
                 </div>
            </div>
        </div>
    </div>


<style>


</style>