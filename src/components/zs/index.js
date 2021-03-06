import Basic from './zs-basic';
import ZSCard from './zscard';
import ZSTest from './zs-test';
import ZsSpan from './zs-span';
import ApiSpan from './api-span';
import ZsFormItem from './zs-form-item';
import ZsForm from './zs-form';
const components = [
    Basic,ZSCard,ZSTest,ZsSpan,ApiSpan,ZsFormItem,ZsForm
];
export default {
    install: function (Vue) {
        components.map(component => {
            Vue.component(component.name, component);
        });
    },
    Basic,ZSCard,ZSTest,ZsSpan,ApiSpan,ZsFormItem,ZsForm
}