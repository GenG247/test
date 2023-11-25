<script>
    export let data
</script>


<svelte:head>
    <title>{data.meta.title}</title>
    <meta property="og:type" content="article" />
    <meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
    <hgroup>
        <h1>{data.meta.title}</h1>
        <p>Published at {data.meta.date}</p>
    </hgroup>
    <section class="entry">
        <div class="prose">
            <svelte:component this={data.content} />
        </div>
    </section>
</article>