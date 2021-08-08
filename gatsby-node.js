const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                components: path.resolve(__dirname, "src/components"),
                sections: path.resolve(__dirname, "src/sections"),
                overlays: path.resolve(__dirname, "src/overlays"),
            },
        },
    });
};
