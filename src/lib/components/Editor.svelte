<script lang="ts">
	import { Editor, rootCtx } from '@milkdown/core';
	import { commonmark } from '@milkdown/preset-commonmark';
	import { gfm } from '@milkdown/preset-gfm';
	import { history } from '@milkdown/plugin-history';
	import { emoji } from '@milkdown/plugin-emoji';
	import { clipboard } from '@milkdown/plugin-clipboard';
	import { listener, listenerCtx } from '@milkdown/plugin-listener';
	import { block } from '@milkdown/plugin-block';
	import { placeholder } from '$lib/plugins/placeholder';
	import { typewriter } from '$lib/plugins/typewriter';
	import { EditorInstance, EditorJSON, EditorMarkdown } from '../stores';
	import { prism, prismConfig } from '@milkdown/plugin-prism';
	import { refractor } from 'refractor/lib/common';
	import { UserSettings } from '$lib/stores';

	function editor(dom: HTMLDivElement) {
		const makeEditor = Editor.make()
			.config((ctx) => {
				const listener = ctx.get(listenerCtx);
				ctx.set(prismConfig.key, {
					configureRefractor: () => {
						return refractor;
					}
				});
				listener.updated((_, doc, prevDoc) => {
					if (doc !== prevDoc) {
						EditorJSON.set(doc);
					}
				});
				listener.markdownUpdated((_, markdown, prevMarkdown) => {
					if (markdown !== prevMarkdown) {
						EditorMarkdown.set(markdown);
					}
				});
				ctx.set(rootCtx, dom);
			})
			.use(commonmark)
			.use(gfm)
			.use(history)
			.use(emoji)
			.use(clipboard)
			.use(prism)
			.use(block)
			.use(placeholder)
			.use(listener)
			.create();
		makeEditor.then((editor) => {
			dom.spellcheck = false;
			EditorInstance.set(editor);

			if ($UserSettings.typingMode === 'Typewriter') {
				editor.use(typewriter);
				editor.create();
			}
		});
	}
</script>

<div class="editor" use:editor />

<style lang="scss">
</style>
