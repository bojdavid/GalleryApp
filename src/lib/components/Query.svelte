<script>
 const items = [
    "Lion",
    "Tiger",
    "Elephant",
    "Giraffe",
    "Zebra",
    "Kangaroo",
    "Panda",
    "Koala",
    "Penguin",
    "Dolphin",
    "Whale",
    "Shark",
    "Eagle",
    "Falcon",
    "Owl",
    "Cheetah",
    "Leopard",
    "Hippo",
    "Rhino",
    "Alligator",
    "Crocodile",
    "Bear",
    "Wolf",
    "Fox",
    "Deer",
    "Moose",
    "Bison",
    "Antelope",
    "Squirrel",
    "Rabbit",
    "Raccoon",
    "Skunk",
    "Porcupine",
    "Otter",
    "Seal",
    "Walrus",
    "Turtle",
    "Frog",
    "Toad",
    "Lizard",
    "Snake"
]
</script>

<div class="relative overflow-hidden w-4/5 m-auto">
    <div class="flex flex-row overflow-x-auto ">
        <div class="flex flex-row carousel">

            {#each items as item}
                <div class="w-1/5  p-4 m-2 bg-surface-300 dark:bg-surface-800 text-white rounded-lg shadow-lg">
                    {item}
                </div>
            {/each}
        </div>
        
    </div>
</div>


<style>
    @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(calc(-100% / 20 * 19)); }
    }
    .carousel {
        animation: scroll 50s linear infinite;
    }
    .carousel::-webkit-scrollbar {
            height: 12px;
        }
        .carousel::-webkit-scrollbar-track {
            background: black;
        }
        .carousel::-webkit-scrollbar-thumb {
            background: red;
            border-radius: 6px;
        }
</style>