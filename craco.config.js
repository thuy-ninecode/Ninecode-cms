const path = require("path");
module.exports = {
    webpack: {
        alias: {
            "@components": path.resolve(__dirname, "src/components"),
            "@pages": path.resolve(__dirname, "src/pages"),
            "@configs": path.resolve(__dirname, "src/configs"),
            "@layouts": path.resolve(__dirname, "src/layouts"),
            "@assets": path.resolve(__dirname, "src/assets"),
            "@redux": path.resolve(__dirname, "src/redux"),
            "@stylesheets": path.resolve(__dirname, "src/stylesheets"),
            "@utils": path.resolve(__dirname, "src/utils"),
        },
    },
};
