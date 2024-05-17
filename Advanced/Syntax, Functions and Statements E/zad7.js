function cookingByNum(num, ...op) {
    num = Number(num);
    for (const iterator of op) {
        switch (iterator) {
            case 'chop':
                num /= 2;
                break;
            case 'dice':
                num = Math.sqrt(num);
                break;
            case 'spice':
                num++;
                break;
            case 'bake':
                num *= 3;
                break;
            case 'fillet':
                num = num - 0.2 * num;
                break;
            default:
                break;
        }
        console.log(num);
    }
}

cookingByNum('9', 'dice', 'spice', 'chop', 'bake', 'fillet');