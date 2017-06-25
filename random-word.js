(function(){
	let words = [
		'Карандаш — Э пэнсил<br />Стол — Э тэйбл<br />Девушка — Чувиха',
		'London is the capital of<br />Great Britain',
		'I\'ll be back',
		'Russian Vodka,<br />Bears and Balalaika',
		'Everybody lies!',
		'<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAASCAMAAABYd88+AAAAflBMVEUWGSL///8NEBkRFB0KDRYDBhAGCRIAAw0AAAjh4eP19fWmp6tGSVA2OUHFxci/v8KrrK+goqWTlJh8foRtbnRXWWBTVVs8P0YgIyvs7O3q6uvj5OXa2tvU1dbCw8Wys7aVl5uEhoqDhYl1d3xoam9lZ21dXmUvMTkoKzMAAAaAnZSUAAAAiElEQVQI1yXMRw7EMAxDUUru6T2Z3tv9LziW/XcPBAiKqTpQURAJNmZba0oIP4BXSngoDeixywvtXJR/r0fBqBFjswi+CpIrQK1ipEyDYBRS7K9YXIYt5wY0f5JMJ9fPvUtLL5hKK1Cb4HbXkPwpon9xfi4j2irDDhFUa+O8Zw3BebgciKpqCn9iQQWK2Vz7iQAAAABJRU5ErkJggg==" style="border: none;" />&nbsp;May the Force be with you!'
	]
	let wlength = words.length;
	document.getElementById('js-word').addEventListener('mouseover', function(){
		let rand = Math.floor(Math.random() * wlength);
		this.innerHTML = words[rand];
	});
})();
