module.exports = {
    presets:[
        [
            "@babel/preset-env",
            {
                targets:{
                    "ie": "11"
                },
                "corejs": "3.0.0",
                useBuiltIns:"usage"
            }
        ]
    ]
}