// Functionality To animate scroll 
 
document.queryselectorall ('A [ HREF ^= '# "]').forEach(anchor=>{

Anchor.addeventlistener (' click',function(E)
E.preventDefault() , 

document.querrySelector(this.Getattribute('HREF').Scrollintoview({ behavior:'Smooth'}) } );

});
