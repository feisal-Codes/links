
const parentDiv=document.getElementById('main');
const parentDiv2=document.getElementById('divv');

const ul=document.querySelector('#myul');
console.log('here');




class CreateLink{

 constructor(title,url,author){
    
    this.title=title;
    
    this.url=url;
    this.author=author;
 }


}

const link1=new CreateLink('edu','http://www.google.com','feisal');
const link2=new CreateLink('space','http://www.space.io','marwa');
const link3=new CreateLink('life','http://www.life.com','yahya');
const linkedlist=[link1,link2,link3];

 const addlist=(link)=>{
    const a=document.createElement('a');
    const li=document.createElement('li');
    const p=document.createElement('p');
    const sp=document.createElement('span');
    let ur='https://';
    
    if (!link.url.startsWith('http://')){
        link.url=ur + link.url;
    }

    a.href=link.url;
    a.textContent=link.url;
    a.id='aid';
    sp.textContent=` Submitted by ${link.author}`;
    sp.id='spanid';
    
    p.appendChild(document.createTextNode(` ${link.title} `));
    p.id='p';
    p.appendChild(a);
    p.appendChild(sp);
    li.appendChild(p);
    
    li.classList.add('mylist');
    console.log(link.title,link.url,link.author);
    ul.insertBefore(li, ul.firstChild);


};
linkedlist.forEach(link=>{
    addlist(link);
})




const addLInk=()=>{
    btn.disabled=true;
    const form = document.createElement('form');
    const title=document.createElement('input');
    const url=document.createElement('input');
    const author=document.createElement('input');
    const add=document.createElement('input');

    form.classList.add('myform');
    
    title.type='text';
    title.classList.add('myinput');
    title.placeholder='enter link title';
    title.required=true;

    url.type='text';
    url.classList.add('myinput');
    url.placeholder='Enter link url';
    url.required=true;

    author.type='text';
    author.classList.add('myinput')
    author.placeholder='enter name of author';
    author.required=true;

    add.type='submit';
    add.value='Add Link';
    add.id='addlink';
    add.classList.add('myinput')

    form.appendChild(title);
    form.appendChild(url);
    form.appendChild(author);
    form.appendChild(add);

    parentDiv2.appendChild(form);
    form.addEventListener('submit',e=>{
       


       const linkObject=new CreateLink(title.value,url.value,author.value);
       
       linkedlist.push(linkObject);

       addlist(linkObject)
       linkedlist.push(linkObject);
       
       e.preventDefault();
       form.innerHTML='';
       btn.disabled=false;
       
    });

}


 
const btn=document.getElementById('mybtn');
btn.addEventListener('click',addLInk);
console.log(linkedlist.length)




















