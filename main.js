function evaluate(nums, ops) {
  var numbers = nums.map(function(num) { return parseFloat(num) })
  var total = do_math[ops[0]](numbers[0], numbers[1])
  var i = 1
  var j = 2
  while (i < ops.length) {
    total = do_math[ops[i]](numbers[j], numbers[j+1])
    i ++
    j += 2
  }
  return total
}

var do_math = {
  '+': function(a, b) { return a + b },
  '-': function(a, b) { return a - b },
  '÷': function(a, b) { return a / b },
  'x': function(a, b) { return a * b },
}
var $buttons = $('.btn')
var $outputField = $('#output')

var number = ''
var operands = []
var operators = []
var total = 0

$buttons.on('click', function() {
  if ($(this).hasClass('num')) {
    $outputField.append($(this).text())
    number += $(this).text()
  } else if ($(this).hasClass('op')) {
    $outputField.append(' ' + $(this).text() + ' ')
    operands.push(number)
    number = ''
    operators.push($(this).text())
  } else if ($(this).hasClass('eq')) {
    operands.push(number)
    total = (evaluate(operands, operators))
    $outputField.text(total)
    number = total.toString()
    operands = []
    operators = []
  } else if ($(this).hasClass('clear')) {
    number = ''
    operands = []
    operators = []
    total = 0
    $outputField.text('')
  }


})
