<template>
    <div>
        <h2>About Page</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Veritatis fugiat quia aliquid nisi maxime illo adipisci voluptate nemo. 
            Itaque autem id est maiores labore sint earum cum enim perspiciatis sequi?
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Veritatis fugiat quia aliquid nisi maxime illo adipisci voluptate nemo. 
            Itaque autem id est maiores labore sint earum cum enim perspiciatis sequi?
        </p>
        <div>{{ data }}</div>
    </div>
</template>

<script setup>
    const { data } = await useFetch('/api/ninja?name=rias',{
            method: 'POST',
            body: { age: 19 }
    })
</script>

<style scoped>
    h2 {
        margin-bottom: 20px;
        font-size: 36px;
    }

    p {
        margin: 20px 0;
    }

</style>