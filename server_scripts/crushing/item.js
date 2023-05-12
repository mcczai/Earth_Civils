console.info('这是机械动力粉碎轮配方分割线')

ServerEvents.recipes(event => {

     event.custom({                                                                         //粉碎金矿石
        "type": "create:crushing",
        "ingredients": [{"item": "create:ochrum"}],
        "results": [{"item": "create:crushed_gold_ore","chance": 0.25},{"item": "minecraft:yellow_dye","chance": 1.00}]
      })

     event.custom({                                                                         //粉碎铜矿石
        "type": "create:crushing",
        "ingredients": [{"item": "create:veridium"}],
        "results": [{"item": "create:crushed_copper_ore","chance": 0.25},{"item": "minecraft:green_dye","chance": 1.00}]
      })

     event.custom({                                                                         //粉碎铁矿石
        "type": "create:crushing",
        "ingredients": [{"item": "create:crimsite"}],
        "results": [{"item": "create:crushed_iron_ore","chance": 0.25},{"item": "minecraft:red_dye","chance": 1.00}]
      })

     event.custom({                                                                         //粉碎锌矿石
        "type": "create:crushing",
        "ingredients": [{"item": "create:asurine"}],
        "results": [{"item": "create:crushed_zinc_ore","chance": 0.25},{"item": "minecraft:blue_dye","chance": 1.00}]
      })

})