<template>
    <header id="navbar">
        <div class="container">
            <div class="three columns logo">
                <router-link to="/">
                    <img src="../../assets/img/bikcraft.svg">
                </router-link>
            </div>
            <div class="nine columns menu">
                <span class="item">
                    <router-link to="/"> Home </router-link>
                </span>
                <span class="item">
                    <router-link to="/sobre"> Sobre </router-link>
                </span>
                <span class="item">
                    <router-link to="/produtos"> Produtos </router-link>
                </span>
                <span class="item">
                    <router-link to="/portfolio"> Portifólio </router-link>
                </span>
                <span class="item">
                    <router-link to="/blog"> Blog </router-link>
                </span>
            </div>
        </div>
    </header>
</template>

<script>

export default {
  name: 'NavBar',
  components: {
  }
}
</script>

<style>
#navbar {
    width: 100%;
    position: fixed;
    top: 0;
    background-color: #FEC63E;
    padding: 15px 0;
    z-index: 10;
}

#navbar + section {
    margin-top: 80px;
}

#navbar .menu {
    text-align: right;
    margin: 0 auto;
    display: inline-block;
    padding-top: 20px;
}

#navbar .menu .item{
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: .1em;
    font-size: 14px;
    line-height: 20px;
    padding: 10px 0;
    transition: all .3s ease;
    margin-left: 25px;
}

#navbar .menu .item a{
    color: #000;
    text-decoration: none;
}

#navbar + * {
    padding-top: 90px;
}
</style>
