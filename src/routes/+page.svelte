<script>
    import { onMount } from 'svelte';
    
    import "../styles/app.css";
    import ImageContainer from '$lib/components/imageContainer.svelte';
    import ImageModal from "../lib/components/ImageModal.svelte"
    import Tabs from '$lib/components/Tabs_.svelte';

    import { PUBLIC_KEY } from '$env/static/public';
    import { createClient } from 'pexels';
    
    import { initializeStores, Modal } from '@skeletonlabs/skeleton';
    import { LightSwitch } from '@skeletonlabs/skeleton';
    
    initializeStores();
    const modalRegistry= {
	// Set a unique modal ID, then pass the component reference
	ImageModal: {ref: ImageModal}
	// ...
};



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
let id_liked = galleryItems.map(item => ({
    id: item.id,
    inFav: false
}));

let error = $state();
let query = $state('Nature');
let fav = $state([])

onMount(async () => {
            localStorage.setItem("images", JSON.stringify(id_liked))
            /*
            const client = createClient("");
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
        })

    //TABS
    let items= ['All', 'Favourites']
    let activeTab = $state('All');
    

    function handleTabChange(item) {
        fav = JSON.parse(localStorage.getItem("images"))
        activeTab = item;
    }  

    

</script>
<Modal components={modalRegistry}/>

        <header class="bg-surface-100 dark:bg-surface-800 py-5">
            <div class="flex flex-row justify-between w-full px-5" >
                <h1 class="h1 uppercase text-center font-bold">Gallery Project</h1>
                <LightSwitch />         
            </div>
        </header>


    <main class=" mx-auto p-4">
        <div class="flex flex-row justify-between flex-wrap mb-8">
            <a class="underline hover:text-surface-500 transistion duration-400 ease-in-out text-xs sm:text-lg mb-5" href="https://www.pexels.com">Photos provided by Pexels</a>

            <div class="border-b border-secondary-500 flex flex-row gap-3 my-auto">
                <span class="font-bold"> Search:</span>
                <input type="text" placeholder="search" bind:value={query} class="text-primary-500 
                                                                                    max-w-[500px] min-w-[200px] w-full
                                                                                    bg-transparent
                                                                                    onfocus:border-none onfocus:border-b-1">
            </div>
        </div>
        

        <div class="scale-[0.9] sm:scale-100 flex flex-row justify-between mb-5"> 
            <div class="flex-grow flex justify-center my-auto ">
              <Tabs {items} active={activeTab} ontabChange={handleTabChange} />
            </div>
      </div>
        
            <div class="columns-2 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-5">
                
                    {#if error}
                        <div class="text-md">
                            {error}
                        </div>
                    {:else if activeTab=="Favourites"}
                        {#each galleryItems as item }
                            {#each fav as f}
                                {#if f.id == item.id && f.infav == true}
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
    
            
    </main>


<style>
 
</style>