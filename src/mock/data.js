/* eslint-disable */
const lastValue = $cookies.get('lastvalue') || ''; 

export default {
  code: 
`
// 今天心情大好
// 我给你表演写代码
// 我要开始写啦
const { 😊 , 😋 } = 😘;
😊.say('嫁给我吧!🎈');
😋.response('好的，只要你带我吃好吃的😝！');
Utils.marry(😊,😋);
Utils.generateInvitation(😊,😋);
// 好了我写完了
// 我要开始运行啦`,
  executions: [{
    name:'初始化',
    time: '',
    duration: 0,
    visible: false
  }, {
    name:'解压中',
    time: '',
    duration: 0,
    visible: false
  }, {
    name:'组装中',
    time: '',
    duration: 0,
    visible: false
  }, {
    name:'打包中',
    time: '',
    duration: 0,
    visible: false
  }, {
    name:'微笑🙂',
    time: '',
    duration: 0,
    visible: false
  }, {
    name:'大笑😄',
    time: '',
    duration: 0,
    visible: false
  }, {
    name:'编译中...',
    time: '',
    visible: false
  }],
  barrages: [
    lastValue,
    '祝百年好合！',
    '新婚快乐，早生贵子',
    '你的邀请函真是美',
    '人美心更美😘😘',
    '你们是最棒的',
    '哇哇哇~😋',
    '祝幸福美满、白头偕老.',
    '新婚大喜呀~~',
    '两个幸福的人！😝😝',
    '祝你俩幸福美满!!',
    '如此般配的一对儿~',
    '😗 😙 😚 😋 ',
    '甜甜蜜蜜！夫妻恩恩爱爱到永远😊'
  ],
}