module.exports = {
	packagerConfig: {},
	rebuildConfig: {},
	makers: [
		{
			name: "@electron-forge/maker-squirrel",
			config: {},
		},
		{
			name: "@electron-forge/maker-zip",
			platforms: ["darwin"],
		},
		{
			name: "@electron-forge/maker-deb",
			config: {
				options: {
					icon: "icon.png",
				},
			},
		},
		{
			name: "@electron-forge/maker-rpm",
			config: {
        config: {
          options: {
            icon: "icon.png",
          },
        },
      },
		},
	],
};
