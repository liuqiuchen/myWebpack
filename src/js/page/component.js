/**
 * Created by user on 2016/11/18.
 */
Vue.component('anchored-heading', {
    render: function (createElement) {
        return createElement(
            'h' + this.level, // tag name 标签名称
            'helloworld'
        );
    },
    props: {
        level: {
            type: Number,
            required: true
        }
    }
});