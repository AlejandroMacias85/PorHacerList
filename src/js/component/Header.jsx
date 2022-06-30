import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Header = () => {
	return (
		<header className="bg-secondary text-white text-center py-2 px-3 rounded">
			<h3>To Do List.</h3>
		</header>
	);
};

export default Header;
