module.exports = function zeros(expression) {
  
    let counter2 =
        counter5 =
        tmp = 0;

    expression.split('*').forEach((item) => {

        item.replace(/([0-9]+)(!+)/g, (...args) => {

            while (args[1] > 1) {

                tmp = args[1];

                while (tmp % 2 == 0) {

                    counter2++;
                    tmp /= 2;
                }

                while (tmp % 5 == 0) {

                    counter5++;
                    tmp /= 5;
                }

                args[1] -= args[2].length;

            }
        })
    });

    return Math.min(counter2, counter5);
}
