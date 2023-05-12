console.info('这是机械动力钻井原矿物分割线')

ServerEvents.recipes(event => {
   event.remove({id: 'createoreexcavation:drilling/gold'})
   event.remove({id: 'createoreexcavation:drilling/quartz'})
   event.remove({id: 'createoreexcavation:drilling/emerald'})
   event.remove({id: 'createoreexcavation:drilling/hardened_diamond'})
   event.remove({id: 'createoreexcavation:drilling/diamond'})
   event.remove({id: 'createoreexcavation:drilling/iron'})
   event.remove({id: 'createoreexcavation:drilling/glowstone'})
   event.remove({id: 'createoreexcavation:drilling/coal'})
   event.remove({id: 'createoreexcavation:drilling/redstone'})
   event.remove({id: 'createoreexcavation:drilling/copper'})
   event.remove({id: 'createoreexcavation:drilling/zinc'})

})