<template>
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                    <form method="POST" action="action.php">
                        <div class="mb-4">
                            <label class="text-xl text-gray-600">标题 <span class="text-red-500">*</span></label>
                            <input type="text" class="border-2 border-gray-300 p-2 w-full" name="title" id="title"
                                   value="" required/>
                        </div>

                        <div class="mb-4">
                            <label class="text-xl text-gray-600">描述 </label>
                            <input type="text" class="border-2 border-gray-300 p-2 w-full" name="description"
                                   id="description" placeholder="(Optional)"/>
                        </div>

                        <div class="mb-8">
                            <label class="text-xl text-gray-600">内容 <span
                                    class="text-red-500">*</span></label>
                            <textarea name="content" class="border-2 border-gray-500">

                            </textarea>
                        </div>

                        <div class="flex p-1">
                            <select class="border-2 border-gray-300 border-r p-2" name="action">
                                <option>保存并发布</option>
                                <option>保存草稿</option>
                            </select>
                            <button role="submit" class="p-3 bg-blue-500 text-white hover:bg-blue-400" required>提交
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "c-k-editor",
        mounted() {

            // CKEDITOR.replace('content');
        }
    }
</script>

<style scoped>

</style>