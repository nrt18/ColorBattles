module.exports = (db) => {
	db.ensure("red", {
		order: 1,	
		name: "Red",
		hex: "#ff0000",
		clicks: 1,
	});
	db.ensure("orange", {
		order: 2,
		name: "Orange",
		hex: "#FF6A00",
		clicks: 1,
	});
	db.ensure("yellow", {
		order: 3,	
		name: "Yellow",
		hex: "#ffff00",
		clicks: 1,
	});
	db.ensure("green", {
		order: 4,	
		name: "Green",
		hex: "#00ff00",
		clicks: 1,
	});
	db.ensure("blue", {
		order: 5,
		name: "Blue",
		hex: "#0026FF",
		clicks: 1,
	});
	db.ensure("cyan", {
		order: 6,
		name: "Cyan",
		hex: "#00FFFF",
		clicks: 1,
	});
	db.ensure("purple", {
		order: 7,
		name: "Purple",
		hex: "#B200FF",
		clicks: 1,
	});
	db.ensure("pink", {
		order: 8,
		name: "Pink",
		hex: "#ff00ff",
		clicks: 1,
	});
	db.ensure("black", {
		order: 9,
		name: "Black",
		hex: "#000000",
		clicks: 1,
	});
	db.ensure("white", {
		order: 10,
		name: "White",
		hex: "#ffffff",
		clicks: 1,
	});
}