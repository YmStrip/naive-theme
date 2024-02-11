![](theme.png)
```shell script
pnpm i y-naive-theme
```
```vue
<template>
	<n-config-provider :theme-overrides="dark">
		<app/>
	</n-config-provider>
</template>
<script lang="ts" setup>
import dark from "y-naive-theme/dark";
</script>
```
