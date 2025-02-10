<script>
  let { items, active, ontabChange } = $props();

  const handleTabChange = (item) => {
    ontabChange(item);
  };
</script>

<div class="tabs">
  <ul class=" hover:text-surface-100">
    {#each items as item}
      <li>
        <button
          type="button"
          onclick={() => handleTabChange(item)}
          class:active={item === active}
          class="button"
        >
          {item}
        </button>
      </li>
    {/each}
  </ul>
</div>

<style>
  ul {
    display: flex;
    justify-content: space-around;
    padding: 0;
    list-style-type: none;
  }
  li {
    margin: 0 16px;
    font-size: 18px;
    cursor: pointer;
  }
  .active {
    color: #1bd91e;
    padding-bottom: 8px;
    transition: 0.3s ease-out;
  }

  .active:hover{
    color: #1f7c20;
  }
</style>
