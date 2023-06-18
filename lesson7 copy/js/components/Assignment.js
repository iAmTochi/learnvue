export default {

    template: `
            
        <li>
            <labe class="p-2 flex justify-between items-center">
                {{ assignment.name }}
                <input type="checkbox" v-model="assignment.complete" class="ml-2">
            </label>
            
        </li>
                    
                
    `,

    props: {
        assignment: Object
    }
}