console.info('这是大米写的配方分割线')

//禁用物品右键
ItemEvents.rightClicked(event => {
    let banBlockList = ["lightmanscurrency:coinmint",
    "lightmanscurrency:terminal",
    "lightmanscurrency:gem_terminal",
    "lightmanscurrency:item_trader_interface",
    "lightmanscurrency:paygate",
    "lctech:fluid_trader_interface",
    "lctech:energy_trader_interface",
    "create:filter",
    "create:attribute_filter",
    'storagenetwork:crafting_remote',
    'storagenetwork:picker_remote',
    'storagenetwork:collector_remote',
    'storagenetwork:builder_remote',
    "create:filter",
    "create:attribute_filter",
    "minecraft:iron_block"]
    if(banBlockList.indexOf(event.block)!=-1){
      event.cancel();
    }
  })
