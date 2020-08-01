var dbobje = {}

dbobje.user =[
   {
      name:'nancy',
      role:'Admin'
   },
   {
      name:'joshlin',
      role:'superadmin'
   }
]
var dbquery={
   find:(table) => {return 'select * from ${table}'},
   insert:(table,dbobj) => {return 'insert into ${table} name,city VALUES(${dbobj.name},${dbobj.city})'}
}