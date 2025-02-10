<script>
import { getModalStore } from '@skeletonlabs/skeleton';
import { onMount } from 'svelte';
			
const modalStore = getModalStore();

let {galleryItem} = $props();

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

    <div class="min-w-[100px] max-w-[600px] w-full group overflow-hidden rounded-md mb-5 static">
        <div class="relative ">
            <div class="absolute right-0 
                        sm:transform sm:translate-x-full
                        sm:group-hover:translate-x-0
                        transition duration-500 ease-in-out shadow-lg"> 
                
                <button class="" onclick={addFavourites}> 
                    {#if isfav}
                        <img src="/heart.png" alt="red heart" class="w-6 sm:w-10 h-auto" >
                    {:else}
                        <img src="/heart_blank.png" alt="red heart" class="w-6 sm:w-10 h-auto" >
                    {/if}
                </button>
            </div>
    
            <button onclick={expandImage} class="w-full">
                <img src={galleryItem.src.medium} alt={galleryItem.alt} class="w-full h-auto" >
            </button>
            
            <div class="w-full h-[4rem] absolute bottom-0 
                        transform translate-y-full
                        group-hover:shadow-lg
                        group-hover:translate-y-0 hover:bg-opacity-100 
                        transition duration-500 ease-in-out
                        ">
                <!-- Details  -->
                 <div class="bg-gradient-to-t  from-black bg-opacity-50 backdrop-blur-md p-4 rounded-md">
                    <div class="text-white font-bold">
                        Author: <span class="text-primary-500">{galleryItem.photographer}</span><br>
                        <a href="{galleryItem.photographer_url}" class="underline text-primary-500 hover:text-primary-700">View Profile on Pexels</a>
                    </div>
                 </div>
            </div>
        </div>
    </div>
