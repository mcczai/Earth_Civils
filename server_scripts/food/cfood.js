ServerEvents.recipes(event => {
  event.custom({      //汤圆
       "type": "farmersdelight:cooking",
       "cookingtime": 200,
       "experience": 1.0,
       "ingredients": [
         {"tag": "minecraft:flowers"},{"item": "minecraft:sugar"},{"tag": "forge:crops/rice"},{"ignoreNBT": true,"item": "caupona:water"}],
       "recipe_book_tab": "meals",
       "result": {
         "item": "kubejs:tangyuan"
       }
  })

  event.custom({      //饺子
       "type": "farmersdelight:cooking",
       "cookingtime": 200,
       "experience": 1.0,
       "ingredients": [
         {"ignoreNBT": true,"item": "caupona:water"},{"item": "farmersdelight:bacon"},{"tag": "forge:dough"},{"ignoreNBT": true,"item": "caupona:chives_spice_jar"}],
       "recipe_book_tab": "meals",
       "result": {
         "item": "kubejs:ravioli"
       }
  })
})