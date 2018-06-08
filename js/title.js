// �Զ��嶨ʱ��[��Ԫ�ؼ��������ִ�лص�����]
function customTimer(inpId, fn) {
  if ($(inpId).length) {
    fn();
  }
  else {
    var intervalId = setInterval(function () {
      if ($(inpId).length) {  //���������
        clearInterval(intervalId);  // ��رն�ʱ��
        customTimer(inpId, fn);              //ִ������
      }
    }, 100);
  }
}

// Ϊ����Ⱦ cavans Ч���ı��⣬����һ�� title �б�
function generateBlogTitle() {
  var root=document.createElement("div");
  root.id='ui';
  for (var i=0; i < 50; i++) {
    var node=document.createElement("div");
    node.className='text';
    node.innerHTML='ǧ��֮�У�ʼ������';
    root.appendChild(node);
  }
  document.getElementById("blogTitle").appendChild(root);

  var subTitle=document.createElement("h2");
  subTitle.innerHTML='Talk is cheap, show me the code.';
  document.getElementById("blogTitle").appendChild(subTitle);
}

// execute the func after the page have loaded
$(function () {
  customTimer('#blogTitle', generateBlogTitle);
});