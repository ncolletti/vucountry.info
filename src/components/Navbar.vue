<template>

    <nav class="navbar navbar-dark bg-primary navbar-expand">
    <router-link to="/" class="navbar-brand active">Vucountry.info<span class="sr-only">(current)</span></router-link>
        <ul class="navbar-nav navbar-collapse mr-auto">
        <li class="nav-item">
            <router-link class="nav-link" to="/saved">Saved</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/explore">Explore</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
        </li>
        </ul>
    </nav>

</template>
<script>
export default {

}
</script>