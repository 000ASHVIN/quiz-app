<template>
	<div>
		<div class="nav-bar">
			<ul>
				<li>
					<router-link to="/">Home</router-link>
					<div class="right-slide">
						<div class="content"><router-link to="/">Home</router-link></div>
					</div>
				</li>

				<!-- <li class="menu">
					<a href="#">Contact</a>
					<ul class="sub-menu">
						<li>
							<a href="#">Ashvin</a>
							<div class="right-slide"><div class="content">Ashvin</div></div>
						</li>
						<li>
							<a href="#">Niten</a>
							<div class="right-slide"><div class="content">Niten</div></div>
						</li>
						<li>
							<a href="#">Anil</a>
							<div class="right-slide"><div class="content">Anil</div></div>
						</li>
					</ul>
					<div class="right-slide"><div class="content">Contact</div></div>
				</li> -->
				<li>
					<router-link to="/about">About</router-link>
					<div class="right-slide">
						<div class="content">
							<router-link to="/about">About</router-link>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<!-- <b-nav>
			<b-nav-item>
				<router-link to="/">Home</router-link>
			</b-nav-item>
			<b-nav-item>
				<router-link to="/about">About</router-link>
			</b-nav-item>
		</b-nav> -->
	</div>
</template>

<script>
export default {
	name: "Nav",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .nav {
	justify-content: center;
} */
.nav-bar {
	background-color: green;
}
.nav-bar ul {
	display: inline-flex;
	list-style: none;
	margin: 0;
	padding: 0;
	color: white;
}
.nav-bar ul li {
	padding: 10px;
	margin: 10px;
	position: relative;
	width: 120px;
}
.nav-bar .right-slide {
	position: absolute;
	width: 0;
	left: 0;
	top: 0;
	height: 100%;
	background: lightgreen;
	border-radius: 5px;
	transition: 0.5s ease;
}
.nav-bar .right-slide .content,
.nav-bar .right-slide .content a {
	padding: 10px;
	color: transparent;
	transition: 0.5s ease;
}
.nav-bar .sub-menu .content {
	display: none;
	transition: 0.5s ease;
}
.nav-bar ul li:hover {
	/* background: lightgreen; */
	border-radius: 5px;
	cursor: pointer;
}
.nav-bar ul li:hover > .right-slide {
	width: 100%;
}
.nav-bar ul li:hover .right-slide .content,
.nav-bar ul li:hover .right-slide .content a {
	color: white;
}
.nav-bar .sub-menu li:hover a {
	color: green;
}
.nav-bar .sub-menu li:hover .right-slide .content {
	color: white;
	display: block;
}
.nav-bar a {
	text-decoration: none;
	color: white;
}
.nav-bar .sub-menu {
	display: none;
	background-color: green;
	position: absolute;
	margin: 10px;
	padding: 10px;
	margin-left: 30px;
	z-index: 1;
}
.nav-bar ul li:hover .sub-menu {
	display: block;
}
.sub-menu li {
	border-bottom: 1px dotted white;
}
</style>
