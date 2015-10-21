<script>
jQuery(document).ready(function(){
jQuery('.sellers.Address label').html('<span class="important">*</span>地址');
jQuery('.sellers.City label').html('<span class="important">*</span>城市');
jQuery('.sellers.Lot.Size label').html('土地面积');
jQuery('.sellers.Moving\\/Selling label').html('搬家/出售');
jQuery('.sellers.Name label').html('<span class="important">*</span>姓名');
jQuery('.sellers.Email label').html('<span class="important">*</span>电子邮件');
jQuery('.sellers.Phone label').html('电话');
jQuery('.sellers.Mobile label').html('手机');
jQuery('.sellers.Bedrooms label').html('卧室');
jQuery('.sellers.Bathrooms label').html('洗手间');
jQuery('.sellers.Finished.Area label').html('室内面积');
jQuery('.sellers.Appliances.Included label').html('包含橱柜等设施');
jQuery('.sellers.Price label').html('价格');
jQuery('.sellers.Receive.Newsletter label').html('获得最新资讯');
jQuery('.sellers.Comments label').html('留言');
jQuery('.for_sellers .btn.submit').val('提交');

jQuery('.buyers.Ideal.Location label').html('<span class="important">*</span>理想居住地');
jQuery('.buyers.Price.Range label').html('<span class="important">*</span>价格区间');
jQuery('.buyers.Type.Of.Home label').html('<span class="important">*</span>家庭类型');
jQuery('.buyers.Name label').html('<span class="important">*</span>姓名');
jQuery('.buyers.Email label').html('<span class="important">*</span>电子邮件 ');
jQuery('.buyers.Phone label').html('电话');
jQuery('.buyers.Mobile label').html('手机');
jQuery('.buyers.Min.Bedrooms label').html('卧室数量(不小于)');
jQuery('.buyers.Min.Bathrooms label').html('洗手间数量(不小于)');
jQuery('.buyers.Preferred.Moving.Date label').html('预计搬家日期');
jQuery('.buyers.Receive.Newsletter label').html('获得最新资讯');
jQuery('.buyers.Comments label').html('留言');
jQuery('.for_buyers .btn.submit').val('提交');

jQuery('.contact.Name label').html('<span class="important">*</span>姓名');
jQuery('.contact.Email label').html('<span class="important">*</span>电子邮件');
jQuery('.contact.Phone label').html('联系电话');
jQuery('.contact.Comments label').html('意见留言');
jQuery('.contact .btn.submit').val('提交');

});

window.onload = function(){
jQuery(".dropdown-menu li:nth-child(1) a span.text").html('1-3 月');
jQuery(".dropdown-menu li:nth-child(2) a span.text").html('4-6 月');
jQuery(".dropdown-menu li:nth-child(3) a span.text").html('6 月以上');
jQuery(".dropdown-toggle.selectpicker span.filter-option").html('1-3 月');
}
</script>
<style>.important{ color: #ff0000; }</style>