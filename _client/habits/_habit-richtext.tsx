import { useDebouncedEffect } from "_client/utils/debounce";
import { Element, HoveringToolbar, Leaf, toggleFormat, withShortcuts } from "_client/utils/slate";
import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { createEditor, Descendant } from "slate";
import { withHistory } from "slate-history";
import { Editable, ReactEditor, RenderElementProps, Slate, useFocused, withReact } from "slate-react";

type HabitRichtextProps = {
  id: string;
  label: string;
  setValue: (val: string) => void;
  value: string;
  info?: string;
  placeholder?: string;
};

const initialValue: Descendant[] = [
  {
    type: "paragraph",
    children: [{ text: "A line of text in a paragraph." }],
  },
];

export const HabitRichtext: FC<HabitRichtextProps> = ({
  id,
  label,
  setValue,
  value,
  info,
  placeholder,
}) => {
  const renderElement = useCallback((props: RenderElementProps) => <Element {...props} />, []);
  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);
  const [editor] = useState(() => withShortcuts(withHistory(withReact(createEditor()))));
  const [content, setContent] = useState<Descendant[]>(JSON.parse(value) ?? initialValue);

  useDebouncedEffect(
    () => {
      setValue(JSON.stringify(content));
    },
    400,
    [content, editor.operations]
  );

  return (
    <label className="relative flex items-start">
      <div className="min-w-0 flex-1 text-sm">
        <div className="mb-1 select-none font-medium text-gray-700 dark:text-dark-text">
          {label}
        </div>

        <div className="flex items-start space-x-4">
          <div className="relative min-w-0 flex-1">
            <div className="min-h-[120px] overflow-hidden rounded-lg border border-gray-300 py-3 px-3 shadow-sm focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
              <Slate editor={editor} value={content} onChange={setContent}>
                <HoveringToolbar />
                <Editable
                  spellCheck
                  className="!min-h-[90px]"
                  placeholder={placeholder ?? "Enter some text..."}
                  renderElement={renderElement}
                  renderLeaf={renderLeaf}
                  onDOMBeforeInput={(event: InputEvent) => {
                    // event.preventDefault();
                    switch (event.inputType) {
                      case "formatBold":
                        return toggleFormat(editor, "bold");
                      case "formatItalic":
                        return toggleFormat(editor, "italic");
                      case "formatUnderline":
                        return toggleFormat(editor, "underlined");
                    }
                  }}
                />
              </Slate>
            </div>
          </div>
        </div>

        {info ? <p className="mt-2 text-gray-500 ">{info}</p> : null}
      </div>
    </label>
  );
};
