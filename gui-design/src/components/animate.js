const animates = [
	{
		label: '弹跳',
		value: 'bounce'
	},
	{
		label: '闪烁',
		value: 'flash'
	},
	{
		label: '脉动',
		value: 'pulse'
	},
	{
		label: '橡皮筋',
		value: 'rubberBand'
	},
	{
		label: '摇动',
		value: 'shake'
	},
	{
		label: '摇头',
		value: 'headShake'
	},
	{
		label: '悬摆',
		value: 'swing'
	},
	{
		label: '波动',
		value: 'tada'
	},
	{
		label: '晃动',
		value: 'wobble'
	},
	{
		label: '果冻',
		value: 'jello'
	},
	{
		label: '弹入',
		value: 'bounceIn'
	},
	{
		label: '下弹入',
		value: 'bounceInDown'
	},
	{
		label: '左弹入',
		value: 'bounceInLeft'
	},
	{
		label: '右弹入',
		value: 'bounceInRight'
	},
	{
		label: '上弹入',
		value: 'bounceInUp'
	},
	{
		label: '弹出',
		value: 'bounceOut'
	},
	{
		label: '下弹出',
		value: 'bounceOutDown'
	},
	{
		label: '左弹出',
		value: 'bounceOutLeft'
	},
	{
		label: '右弹出',
		value: 'bounceOutRight'
	},
	{
		label: '上弹出',
		value: 'bounceOutUp'
	},
	{
		label: '淡入',
		value: 'fadeIn'
	},
	{
		label: '上淡入',
		value: 'fadeInDown'
	},
	{
		label: 'fadeInDownBig',
		value: 'fadeInDownBig'
	},
	{
		label: '左淡入',
		value: 'fadeInLeft'
	},
	{
		label: 'fadeInLeftBig',
		value: 'fadeInLeftBig'
	},
	{
		label: '右淡入',
		value: 'fadeInRight'
	},
	{
		label: 'fadeInRightBig',
		value: 'fadeInRightBig'
	},
	{
		label: '上淡入',
		value: 'fadeInUp'
	},
	{
		label: 'fadeInUpBig',
		value: 'fadeInUpBig'
	},
	{
		label: '淡出',
		value: 'fadeOut'
	},
	{
		label: '下淡出',
		value: 'fadeOutDown'
	},
	{
		label: 'fadeOutDownBig',
		value: 'fadeOutDownBig'
	},
	{
		label: '左淡出',
		value: 'fadeOutLeft'
	},
	{
		label: 'fadeOutLeftBig',
		value: 'fadeOutLeftBig'
	},
	{
		label: '右淡出',
		value: 'fadeOutRight'
	},
	{
		label: 'fadeOutRightBig',
		value: 'fadeOutRightBig'
	},
	{
		label: '上淡出',
		value: 'fadeOutUp'
	},
	{
		label: 'fadeOutUpBig',
		value: 'fadeOutUpBig'
	},
	{
		label: '水平反转',
		value: 'flipInX'
	},
	{
		label: '垂直反转',
		value: 'flipInY'
	},
	{
		label: '水平反转出',
		value: 'flipOutX'
	},
	{
		label: '垂直反转出',
		value: 'flipOutY'
	},
	{
		label: 'lightSpeedIn',
		value: 'lightSpeedIn'
	},
	{
		label: 'lightSpeedOut',
		value: 'lightSpeedOut'
	},
	{
		label: 'rotateIn',
		value: 'rotateIn'
	},
	{
		label: 'rotateInDownLeft',
		value: 'rotateInDownLeft'
	},
	{
		label: 'rotateInDownRight',
		value: 'rotateInDownRight'
	},
	{
		label: 'rotateInUpLeft',
		value: 'rotateInUpLeft'
	},
	{
		label: 'rotateInUpRight',
		value: 'rotateInUpRight'
	},
	{
		label: 'rotateOut',
		value: 'rotateOut'
	},
	{
		label: 'rotateOutDownLeft',
		value: 'rotateOutDownLeft'
	},
	{
		label: 'rotateOutDownRight',
		value: 'rotateOutDownRight'
	},
	{
		label: 'rotateOutUpLeft',
		value: 'rotateOutUpLeft'
	},
	{
		label: 'rotateOutUpRight',
		value: 'rotateOutUpRight'
	},
	{
		label: 'hinge',
		value: 'hinge'
	},
	{
		label: 'jackInTheBox',
		value: 'jackInTheBox'
	},
	{
		label: 'rollIn',
		value: 'rollIn'
	},
	{
		label: 'rollOut',
		value: 'rollOut'
	},
	{
		label: 'zoomIn',
		value: 'zoomIn'
	},
	{
		label: 'zoomInDown',
		value: 'zoomInDown'
	},
	{
		label: 'zoomInLeft',
		value: 'zoomInLeft'
	},
	{
		label: 'zoomInRight',
		value: 'zoomInRight'
	},
	{
		label: 'zoomInUp',
		value: 'zoomInUp'
	},
	{
		label: 'zoomOut',
		value: 'zoomOut'
	},
	{
		label: 'zoomOutDown',
		value: 'zoomOutDown'
	},
	{
		label: 'zoomOutLeft',
		value: 'zoomOutLeft'
	},
	{
		label: 'zoomOutRight',
		value: 'zoomOutRight'
	},
	{
		label: 'zoomOutUp',
		value: 'zoomOutUp'
	},
	{
		label: 'slideInDown',
		value: 'slideInDown'
	},
	{
		label: 'slideInLeft',
		value: 'slideInLeft'
	},
	{
		label: 'slideInRight',
		value: 'slideInRight'
	},
	{
		label: 'slideInUp',
		value: 'slideInUp'
	},
	{
		label: 'slideOutDown',
		value: 'slideOutDown'
	},
	{
		label: 'slideOutLeft',
		value: 'slideOutLeft'
	},
	{
		label: 'slideOutRight',
		value: 'slideOutRight'
	},
	{
		label: 'slideOutUp',
		value: 'slideOutUp'
	}
];

export default {
	animates
};
