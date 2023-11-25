<script>
	import '../styles/app.css'
    import Header from "./header.svelte";
    import Footer from "./footer.svelte";
</script>

<div id="_root">
    <Header />
    <main>
        <slot />
    </main>
    <Footer />
</div>

