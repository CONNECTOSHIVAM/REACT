const contacts = [ {
    id: 1,
    name: "shivam",
    email: "shivam@momsnanhi.com"
},
{
    id: 2,
    name: "zendria",
    email: "zendria@momsnanhi.com"
},
{
    id: 3,
    name: "sanskriti",
    email: "sanskriti@momsnanhi.com"
}
 ]

const name = "zendria"

const filtered = contacts.filter((value)=>(value.name.toLowerCase().includes(name)));
console.log(filtered);


