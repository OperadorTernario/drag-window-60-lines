Dialog = function(node)
{
	var header = node.children[0];		// the first child is .header element
	var x, y;

	header.addEventListener('mousedown', function(event) {
		x = event.clientX - node.offsetLeft;
		y = event.clientY - node.offsetTop;
		document.body.addEventListener('mousemove', move);
	});

	header.addEventListener('mouseup', function() {
		document.body.removeEventListener('mousemove', move);
	});

	function move(event) {
		node.style.left = event.clientX - x + 'px';
		node.style.top = event.clientY - y + 'px';
	}

	var close = header.children[0];

	close.addEventListener('click', function(event) {
		node.parentNode.removeChild(node);
	});

	close.addEventListener('mousedown', function() {
		event.stopPropagation();
	});
}