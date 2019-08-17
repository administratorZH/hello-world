$(function(){
  $.ajax({
    url:"http://localhost:3000/index/getIndexProducts",
    type:"get",
    dataType:"json",//ajax可自动将json转为obj
    success:function(res){
      console.log(res);
      var {title,details,price,href,pic}=res[0];
      var html=`<div class="card-body d-flex flex-column align-items-start">
        <h5 class="d-inline-block mb-2">${title}</h5>
        <h6 class="mb-5">
          <a class="text-dark" href="javascript:;">${details}</a>
        </h6>
        <span class="text-primary">¥${price.toFixed(2)}</span>
        <a class="btn btn-primary" href="${href}">查看详情</a>
      </div>
      <img class="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" src="${pic}" data-holder-rendered="true">`;//删除html中57~65行
      var divCard=document.querySelector(
        "h3.pb-3:first-child>div:nth-child(2)>div:first-child>div"
      );
      divCard.innerHTML=html;
  
      var {title,details,price,href,pic}=res[1];
      var html=`<div class="card-body d-flex flex-column align-items-start">
        <h5 class="d-inline-block mb-2">${title}</h5>
        <h6 class="mb-5">
          <a class="text-dark" href="javascript:;">${details}</a>
        </h6>
        <span class="text-primary">¥${price.toFixed(2)}</span>
        <a class="btn btn-primary" href="${href}">查看详情</a>
      </div>
      <img class="card-img-right flex-auto d-none d-md-block mt-5" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" src="${pic}" data-holder-rendered="true">`;//删除61~69行
      var divCard=
        divCard.parentNode.nextElementSibling.children[0]
      divCard.innerHTML=html;
  
      var {title,price,href,pic}=res[2];
      var html=`<div class="card-body d-flex flex-column align-items-start">
        <h5 class="d-inline-block mb-3">${title}</h5>
        <span class="text-primary">¥${price.toFixed(2)}</span>
        <a class="btn btn-primary" href="${href}">查看详情</a>
      </div>
      <img class="card-img-right flex-auto d-none d-md-block mt-5" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" src="${pic}" data-holder-rendered="true">`;//删除67~72行
      var divCard=document.querySelector(
        "h3.pb-3:first-child>div:nth-child(3)>div:first-child>div"
      );
      divCard.innerHTML=html;
  
      //遍历res中剩余3个商品
      var html="";
      for(var p of res.slice(3)){
        var {title,pic,price,href}=p;
        html+=`<div class="col-md-4 p-0 pl-2">
          <div class="card border-0 text-center">
            <img class="card-img-top" src="${pic}" alt="Card image cap">
            <div class="card-body p-0 pr-1 pl-1">
              <span class="d-inline-block">${title}</span>
              <span class="text-primary small">¥${price.toFixed(2)}</span>
              <a class="btn btn-sm btn-primary" href="${href}">查看详情</a>
            </div>
          </div>
        </div>`;//71~80
      }
      var divCard=
        divCard.parentNode.nextElementSibling.children[0]
      divCard.innerHTML=html;
    }
  })
})