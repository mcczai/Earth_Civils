
StartupEvents.registry('item', event => {
         event.create('unformed_sturdy_sheet')
         event.create('component_electronic_adv')
         event.create('component_logic_circuit')
         event.create('steel_firearm_parts')
         event.create('wooden_firearm_parts')
         event.create('formed_sturdy_sheet')
         event.create('chamfered_steel_pipe')
         event.create('component_wooden_firearm_parts')
         event.create('unpolished_wooden_firearm_parts')
         event.create('unpolished_steel_firearm_parts')
         event.create('component_gunpart_hammer')
         event.create('small_portions_gunpowder')
         event.create('no12_projectiles')
         event.create('shotgun_warheads')
         event.create('oneheaded_shotgun_warheads')
         event.create('primer')
         event.create('pistol_casings')
         event.create('rifle_shells')
         event.create('rifle_shells_mold')
         event.create('pistol_casings_mold')
         event.create('medical_kits')
         event.create('ethanol_bottled')
         event.create('component_pistol_ammunition')
         event.create('component_shotgun_ammunition')
         event.create('component_oneheaded_shotgun_ammunition')
         event.create('component_rifle_ammunition')
         event.create('unpolished_records')
         event.create('polished_records')
         event.create('jute_injection')  
         event.create('test')
         event.create('gliders_repair_tools')
         event.create('nickel_iron_alloy')
         event.create('mica')
         event.create('sfpt')
         event.create('lime')
         event.create('solid_nitrotoluene')
         event.create('tangyuan').maxStackSize(8).food(food =>{food.saturation(6);food.hunger(6);food.effect('farmersdelight:comfort',600,1,1);food.effect('farmersdelight:nourishment',300,1,1)})
         event.create('ravioli').maxStackSize(8).food(food =>{food.saturation(6);food.hunger(6);food.effect('farmersdelight:comfort',600,1,1);food.effect('farmersdelight:nourishment',300,1,1)})

})
StartupEvents.registry('block', event => {
         event.create('gura').hardness(0.5).fullBlock(false).box(1,0,6,15,15,15,true)
         event.create('ame').hardness(0.5).fullBlock(false).box(1,0,5,15,16,15,true)
         event.create('unknown_technology').hardness(0.5).fullBlock(false).box(-2,2,-2,18,14,18,true)
})

StartupEvents.registry('fluid', event => {
         event.create('jute').thickTexture('#7FFFAA').thinTexture('#7FFFAA')
         event.create('nitric_acid').gaseous().thickTexture('#ADFF2F').thinTexture('#ADFF2F').density(500)   //硝酸
         event.create('sulfur_dioxide').gaseous().thickTexture('#00FF7F').thinTexture('#00FF7F').density(500)          //二氧化硫
         event.create('sulfuric_acid').thickTexture('#67B821').thinTexture('#67B821').density(500)           //硫酸
         event.create('crude_benzene').thickTexture('#88FF26').thinTexture('#88FF26').density(500)        //粗苯Crude benzene
         event.create('nitrotoluene').thickTexture('#98FB98').thinTexture('#98FB98').density(500)       //硝基甲苯溶液
})


ItemEvents.tooltip(tooltip => {
      tooltip.addAdvanced(['lightmanscurrency:coinmint',
                           'lightmanscurrency:terminal',
                           'lightmanscurrency:portable_terminal',
                           'immersiveengineering:watermill',
                           'lightmanscurrency:gem_terminal',
                           'lightmanscurrency:portable_gem_terminal',
                           'lightmanscurrency:item_trader_interface',
                           'lctech:fluid_trader_interface',
                           'lctech:energy_trader_interface',
                          ],(item,advanced,text) =>{
        text.add(1, Component.translate('tooltip.kubejs.ban'));
      })

      tooltip.addAdvanced('lightmanscurrency:coinmint',(item,advanced,text) =>{
        text.add(2, Component.translate('tooltip.kubejs.ren'));
      })

      tooltip.addAdvanced('kubejs:medical_kits',(item,advanced,text) =>{
         if(!tooltip.shift){
          text.add(1, Component.translate('tooltip.kubejs.medical_kits.1'));
          text.add(2, Component.translate('tooltip.kubejs.shift'));
         }
         else{
          text.add(1, Component.translate('tooltip.kubejs.medical_kits.1'));
          text.add(2, Component.translate('tooltip.kubejs.medical_kits.2'));
          text.add(3, Component.translate('tooltip.kubejs.medical_kits.3'));
          text.add(4, Component.translate('tooltip.kubejs.medical_kits.4'));
         }
      })
      tooltip.addAdvanced('kubejs:jute_injection',(item,advanced,text) =>{
        if(!tooltip.shift){
         text.add(1, Component.translate('tooltip.kubejs.jute_injection.1'));
         text.add(2, Component.translate('tooltip.kubejs.shift'));
        }
        else{
         text.add(1, Component.translate('tooltip.kubejs.jute_injection.1'));
         text.add(2, Component.translate('tooltip.kubejs.jute_injection.2'));
         text.add(3, Component.translate('tooltip.kubejs.jute_injection.3'));
         text.add(4, Component.translate('tooltip.kubejs.jute_injection.4'));
         text.add(4, Component.translate('tooltip.kubejs.jute_injection.5'));
        }
     })
     tooltip.addAdvanced('immersiveengineerings:glider',(item,advanced,text) =>{
       text.add(1, Component.translate('tooltip.immersiveengineerings.glider.1'));
       text.add(2, Component.translate('tooltip.immersiveengineerings.glider.2'));
   })
   tooltip.addAdvanced('kubejs:sfpt',(item,advanced,text) =>{
    text.add(1, Component.translate('tooltip.kubejs.sfpt'));
})
})

ItemEvents.modification(event => {
  event.modify('immersiveengineering:glider', item => {item.maxDamage = 1560})//加强沉浸鞘翅
  event.modify('minecraft:elytra', item => {item.maxDamage = 100})//削弱鞘翅
})

ServerEvents.tags('item', event => {
        event.add('forge:dyes/white','kubejs:mica')
        event.add('forge:dyes/black','create:powdered_obsidian')
        event.remove('forge:ingots/steel', 'davebuildingmod:steel_ingot')
})
ServerEvents.tags('fluid', event => {
        event.get('forge:sulfur_dioxide').add('kubejs:sulfur_dioxide')
        event.get('forge:nitric_acid').add('kubejs:nitric_acid')
        event.get('forge:sulfuric_acid').add('kubejs:sulfuric_acid')
        event.get('forge:crude_benzene').add('kubejs:crude_benzene')
        event.get('forge:nitrotoluene').add('kubejs:nitrotoluene')
})

ItemEvents.rightClicked(event => {
      if (event.player.crouching && event.player.mainHandItem.id == "kubejs:jute_injection"){
           event.item.count--;
           event.player.addItemCooldown("kubejs:jute_injection",600);
           let i = Math.floor(Math.random() * 100 ) + 1
           if(i >=90){ 
              event.player.potionEffects.add("minecraft:strength",600,1,false,false);
              event.player.potionEffects.add("minecraft:resistance",600,1,false,false);
              event.player.potionEffects.add("minecraft:speed",600,0,false,false);
            }else if(i < 90 && i >= 50){
              event.player.potionEffects.add("minecraft:speed",600,0,false,false);
              event.player.potionEffects.add("drinkbeer:drunk",1200,1,false,false);
              event.player.potionEffects.add("minecraft:strength",600,0,false,false);
            }else if(i < 50 && i >= 20){
              event.player.potionEffects.add("minecraft:speed",600,0,false,false);
              event.player.potionEffects.add("drinkbeer:drunk",1200,1,false,false);
              event.player.potionEffects.add("minecraft:weakness",1200,0,false,false);
              event.player.potionEffects.add("minecraft:mining_fatigue",1200,1,false,false);
            }else if(i >= 1 && i<= 5){
              event.player.potionEffects.add("minecraft:instant_damage",20,9,false,false);
            }else{
              event.player.potionEffects.add("drinkbeer:drunk",1200,2,false,false);
              event.player.potionEffects.add("minecraft:mining_fatigue",1200,1,false,false);
              event.player.potionEffects.add("minecraft:slowness",1200,0,false,false);
              event.player.potionEffects.add("minecraft:weakness",1200,1,false,false);
            }

      }
})//黄麻碱针剂实现

ItemEvents.rightClicked(event => {//医疗包实现
       if (event.player.crouching && event.player.mainHandItem.id == "kubejs:medical_kits")
       {
            event.player.heal(2);
            event.item.count--;
            event.player.addItemCooldown("kubejs:medical_kits",63);
        event.player.potionEffects.add("minecraft:regeneration",50,3,false,false);
       }
})

ItemEvents.foodEaten(event => {
    /*if (event.item.id == "kubejs:tangyuan" || event.item.id == "kubejs:ravioli"){
         event.player.give("minecraft:bowl")
    }*/                                                                     //吃完给碗（总不可能带碗也吃了吧）

    if (event.item.id == "kubejs:ravioli"){
       let i = Math.floor(Math.random() * 100 ) + 1
       if(i <= 5 ){
          event.player.give("lightmanscurrency:coin_copper")
          event.player.attack("kubejs:ravioli", 1)
          event.server.tell(`${event.player.name}从饺子里吃出了硬币`)
       }
    }
})

