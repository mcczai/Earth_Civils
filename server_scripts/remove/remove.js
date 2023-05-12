console.info('这是移除配方分割线')

ServerEvents.recipes(event => {
     event.remove({id: 'immersiveengineering:crafting/gunpart_hammer'})    //移除击锤原版合成
     event.remove({id: 'immersiveengineering:crafting/gunpart_barrel'})    //移除枪管原版合成
     event.remove({id: 'immersiveengineering:blueprint/component_electronic_adv'})    //移除高级逻辑组件原版合成
     event.remove({id: 'immersiveengineering:crafting/wooden_grip'})    //移除木握柄原版合成
     event.remove({output: 'create:precision_mechanism', type: 'create:sequenced_assembly'})    //移除原版精密构建合成
     event.remove({id: 'immersiveengineering:crafting/empty_shell'})    //移除合成台大型弹壳配方
     event.remove({id: 'immersiveengineering:bottling/empty_shell'})    //移除原版灌装机合成
     event.remove({id: 'createoreexcavation:vein_finder'})    //移除合成台勘矿稿配方
     event.remove({id: 'create:crafting/kinetics/schedule'})       //移除原版列车时刻表合成
     event.remove({id: 'create:sequenced_assembly/sturdy_sheet'})    //移出原版坚固板合成
     event.remove({id: 'immersiveengineering:crafting/watermill'})     //移出原版水车合成
     event.remove({id: 'create_sa:brass_jetpack_recipe'})    //移除原版喷气背包合成
     event.remove({id: 'create_sa:grapplin_whisk_recipe'})//移除原版钩爪合成
     event.remove({id: 'immersiveengineering:crafting/drill'})//移除原版沉浸钻头合成
     event.remove({id: 'immersiveengineering:crafting/buzzsaw'})//移除原版沉浸电锯合成
     event.remove({id: 'immersiveengineering:crafting/chemthrower'})//移除原版化学喷射器合成
     event.remove({id: 'lightmanscurrency:coinmint'})//移除所有可远程交易终端和印币机
     event.remove({id: 'lightmanscurrency:terminal'})
     event.remove({id: 'lightmanscurrency:terminal2'})
     event.remove({id: 'lightmanscurrency:portable_terminal'})
     event.remove({id: 'lightmanscurrency:gem_terminal'})
     event.remove({id: 'lightmanscurrency:gem_terminal2'})
     event.remove({id: 'lightmanscurrency:portable_gem_terminal'})
     event.remove({id: 'lightmanscurrency:item_trader_interface'})
     event.remove({id: 'lctech:fluid_trader_interface'})
     event.remove({id: 'lctech:energy_trader_interface'})
     event.remove({id: 'create:crafting/appliances/slime_ball'})//移除不合理的粘液球合成
     event.remove({id: 'caupona:crafting/slime_ball'})
     event.remove({id: 'alexsmobs:komodo_spit_to_slime'})
     event.remove({id: 'create:splashing/gravel'})//移除无中生铁的合成\
     event.remove({id: 'create:crushing/ochrum'})//移除伴生矿粉碎产物，然后重写
     event.remove({id: 'create:crushing/veridium'})
     event.remove({id: 'create:crushing/asurine'})
     event.remove({id: 'create:crushing/crimsite'})
     event.remove({id: 'create_electric_stonks:resonating_block'})//移除共振线圈方块合成
     event.remove({id: 'delightful:food/cheeseburger_from_hamburger'})
     event.remove({id: 'storagenetwork:exchange'})
     event.remove({id: 'storagenetwork:crafting_remote'})
     event.remove({id: 'storagenetwork:picker_remote'})
     event.remove({id: 'storagenetwork:collector_remote'})
     event.remove({id: 'storagenetwork:builder_remote'})
     event.remove({id: 'storagenetwork:export_kabel'})
     event.remove({id: 'contact:ender_wrapping_paper'})
     event.remove({id: 'create_crystal_clear:train_glass_casing_using_deployer'})//移除机械动力附属玻璃的配方
     event.remove({id: 'create_crystal_clear:train_glass_casing'})
     event.remove({id: 'lightmanscurrency:mint_coin_copper'})//移除所有硬币合成(任何假钞，都将绳之以法！)
     event.remove({id: 'lightmanscurrency:mint_coin_iron'})
     event.remove({id: 'lightmanscurrency:mint_coin_gold'})
     event.remove({id: 'lightmanscurrency:mint_coin_emerald'})
     event.remove({id: 'lightmanscurrency:mint_coin_netherite'})
     event.remove({id: 'lightmanscurrency:mint_coin_diamond'})
})