export const formatText = function (string) {
	let nowrap = /(\w*[-]\w*)/gi;
	return string.replace(/ :/g,'&nbsp;:').replace(/ \?/g,'&nbsp;?').replace(nowrap, '<span class="nowrap">$1</span>')
};