import { useDebouncedEffect } from "_client/utils/debounce";
import clsx from "clsx";
import { Property } from "csstype";
import { FC, forwardRef, PropsWithChildren, Ref, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { BiBold, BiItalic, BiUnderline } from "react-icons/bi";
import { BaseEditor, Editor, Range, Text, Transforms, Element as SlateElement, Point } from "slate";
import { HistoryEditor } from "slate-history";
import { ReactEditor, RenderElementProps, RenderLeafProps, useFocused, useSlate } from "slate-react";
import { Node } from "slate/dist/interfaces/node";
import TextAlign = Property.TextAlign;

interface BaseProps {
  [key: string]: unknown;
  className?: string;
}

const SHORTCUTS = {
  "*": "list-item" as const,
  "-": "list-item" as const,
  "+": "list-item" as const,
  ">": "block-quote" as const,
  "#": "heading-one" as const,
  "##": "heading-two" as const,
};

type SlateParagraph = {
  children: CustomText[];
  type: "paragraph";
  align?: TextAlign;
};

export type SlateHeading1 = {
  children: CustomText[];
  type: "heading-one";
  align?: TextAlign;
};

export type SlateHeading2 = {
  children: CustomText[];
  type: "heading-two";
  align?: TextAlign;
};

export type SlateListItem = {
  children: CustomText[];
  type: "list-item";
  align?: TextAlign;
};

export type SlateBlockQuote = {
  children: CustomText[];
  type: "block-quote";
  align?: TextAlign;
};

export type SlateBulletedList = {
  children: CustomText[];
  type: "bulleted-list";
  align?: TextAlign;
};

export type SlateNumberedList = {
  children: CustomText[];
  type: "numbered-list";
  align?: TextAlign;
};
type CustomElement =
  | SlateParagraph
  | SlateHeading1
  | SlateHeading2
  | SlateBlockQuote
  | SlateBulletedList
  | SlateNumberedList
  | SlateListItem;
type CustomText = { text: string; bold?: true; italic?: true; underlined?: true };

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}

export const Button = forwardRef(
  (
    {
      className,
      active,
      reversed,
      ...props
    }: PropsWithChildren<
      {
        active: boolean;
        reversed: boolean;
      } & BaseProps
    >,
    ref: Ref<HTMLSpanElement>
  ) => (
    <span
      {...props}
      ref={ref}
      className={clsx(
        className,
        "cursor-pointer",
        reversed
          ? active
            ? "text-white"
            : "text-gray-400"
          : active
          ? "text-black"
          : "text-gray-700"
      )}
    />
  )
);

export const EditorValue = forwardRef(
  (
    {
      className,
      value,
      ...props
    }: PropsWithChildren<
      {
        value: any;
      } & BaseProps
    >,
    ref: Ref<HTMLDivElement>
  ) => {
    const textLines = value.document.nodes
      .map((node: { text: any }) => node.text)
      .toArray()
      .join("\n");
    return (
      <div ref={ref} {...props} className={clsx(className, "my-[30px] mx-[-20px]")}>
        <div className="border-t-2 border-gray-700 bg-gray-200 py-[5px] px-[20px] text-sm text-gray-500">
          Slate's value as text
        </div>
        <div className="flex flex-col gap-4 whitespace-pre-wrap py-[10px] px-[20px] font-mono text-xs text-gray-500">
          {textLines}
        </div>
      </div>
    );
  }
);

export const Icon = forwardRef(
  ({ className, ...props }: PropsWithChildren<BaseProps>, ref: Ref<HTMLSpanElement>) => (
    <span
      {...props}
      ref={ref}
      className={clsx("material-icons", className, "align-text-bottom text-lg")}
    />
  )
);

export const Instruction = forwardRef(
  ({ className, ...props }: PropsWithChildren<BaseProps>, ref: Ref<HTMLDivElement>) => (
    <div
      {...props}
      ref={ref}
      className={clsx(
        className,
        "white-space-pre-wrap mr-[-20px] ml-[10px] bg-gray-200 py-[10px] px-[20px] text-sm"
      )}
    />
  )
);

export const Menu = forwardRef(
  ({ className, ...props }: PropsWithChildren<BaseProps>, ref: Ref<HTMLDivElement>) => (
    <div {...props} ref={ref} className={clsx(className, "flex gap-[15px]")} />
  )
);

export const Portal: FC = ({ children }) => {
  return typeof document === "object" ? ReactDOM.createPortal(children, document.body) : null;
};

export const Toolbar = forwardRef(
  ({ className, ...props }: PropsWithChildren<BaseProps>, ref: Ref<HTMLDivElement>) => (
    <Menu
      {...props}
      ref={ref}
      className={clsx(
        className,
        "relative mx-[-20px] mb-[20px] border-b-2 border-b-gray-500 py-px pr-[18px] pb-[17px]"
      )}
    />
  )
);

export const HoveringToolbar = () => {
  const hoverMenuRef = useRef<HTMLDivElement>(null);
  const editor = useSlate();
  const inFocus = useFocused();

  useDebouncedEffect(
    () => {
      const el = hoverMenuRef.current;
      const selection = editor.selection;

      if (!el) {
        return;
      }

      if (
        !selection ||
        !inFocus ||
        Range.isCollapsed(selection) ||
        Editor.string(editor, selection) === ""
      ) {
        el.removeAttribute("style");
        return;
      }

      const domSelection = window.getSelection();
      const domRange = domSelection?.getRangeAt(0);
      const rect = domRange?.getBoundingClientRect();
      if (rect) {
        el.style.opacity = "1";
        el.style.top = `${rect.top + window.pageYOffset - el.offsetHeight}px`;
        el.style.left = `${rect.left + window.pageXOffset - el.offsetWidth / 2 + rect.width / 2}px`;
      }
    },
    100,
    [editor, editor.selection, inFocus]
  );

  useEffect(() => {
    const el = hoverMenuRef.current;
    const selection = editor.selection;

    if (!el) {
      return;
    }

    if (
      !selection ||
      !inFocus ||
      Range.isCollapsed(selection) ||
      Editor.string(editor, selection) === ""
    ) {
      el.removeAttribute("style");
      return;
    }
  }, [editor, editor.selection, inFocus]);

  return (
    <Portal>
      <Menu
        ref={hoverMenuRef}
        className="absolute top-[-10000px] left-[-10000px] z-10 mt-[-6px] rounded bg-gray-700 px-[7px] pt-[8px] pb-[6px] opacity-0 transition-opacity"
        onMouseDown={(e: { preventDefault: () => void }) => {
          // prevent toolbar from taking focus away from editor
          e.preventDefault();
        }}
      >
        <FormatButton format="bold" icon={<BiBold />} />
        <FormatButton format="italic" icon={<BiItalic />} />
        <FormatButton format="underlined" icon={<BiUnderline />} />
      </Menu>
    </Portal>
  );
};

export const FormatButton: FC<{ format: "bold" | "italic" | "underlined"; icon: JSX.Element }> = ({
  format,
  icon,
}) => {
  const editor = useSlate();
  return (
    <Button
      reversed
      active={isFormatActive(editor, format)}
      onClick={() => toggleFormat(editor, format)}
    >
      {icon}
    </Button>
  );
};

export const toggleFormat = (
  editor: BaseEditor & ReactEditor,
  format: "bold" | "italic" | "underlined"
) => {
  const isActive = isFormatActive(editor, format);
  Transforms.setNodes(
    editor,
    { [format]: isActive ? null : true },
    { match: Text.isText, split: true }
  );
};

export const isFormatActive = (
  editor: BaseEditor & ReactEditor,
  format: "bold" | "italic" | "underlined"
) => {
  const [match] = Editor.nodes(editor, {
    match: (n: Node & { bold?: boolean; italic?: boolean; underlined?: boolean }) =>
      n[format] === true,
    mode: "all",
  });
  return !!match;
};

export const Leaf: FC<
  {
    leaf: { text: string; bold?: boolean; italic?: boolean; underlined?: boolean };
  } & Partial<RenderLeafProps>
> = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }

  if (leaf.underlined) {
    children = <u>{children}</u>;
  }

  return <span {...attributes}>{children}</span>;
};

export const Element: FC<Partial<RenderElementProps>> = ({ attributes, children, element }) => {
  const style = { textAlign: element?.align };
  switch (element?.type) {
    case "block-quote":
      return (
        <blockquote
          className="my-3 border-l-4 border-pink-600 py-1 pl-4 text-sm font-medium text-gray-700"
          style={style}
          {...attributes}
        >
          {children}
        </blockquote>
      );
    case "bulleted-list":
      return (
        <ul
          className="my-4 list-disc pl-4 text-sm font-medium text-gray-700"
          style={style}
          {...attributes}
        >
          {children}
        </ul>
      );
    case "heading-one":
      return (
        <h1
          className="mb-1 text-xl font-bold leading-tight tracking-tight"
          style={style}
          {...attributes}
        >
          {children}
        </h1>
      );
    case "heading-two":
      return (
        <h2
          className="mb-1 font-semibold leading-tight tracking-tight"
          style={style}
          {...attributes}
        >
          {children}
        </h2>
      );
    case "list-item":
      return (
        <li style={style} {...attributes}>
          {children}
        </li>
      );
    case "numbered-list":
      return (
        <ol
          className="mb-4 list-disc text-sm font-medium text-gray-700"
          style={style}
          {...attributes}
        >
          {children}
        </ol>
      );
    default:
      return (
        <p className="mb-1 text-sm font-medium text-gray-700" style={style} {...attributes}>
          {children}
        </p>
      );
  }
};

export const withShortcuts = (editor: BaseEditor & ReactEditor & HistoryEditor) => {
  const { deleteBackward, insertText } = editor;

  editor.insertText = (text) => {
    const { selection } = editor;

    if (text === " " && selection && Range.isCollapsed(selection)) {
      const { anchor } = selection;
      const block = Editor.above(editor, {
        match: (n) => Editor.isBlock(editor, n),
      });
      const path = block ? block[1] : [];
      const start = Editor.start(editor, path);
      const range = { anchor, focus: start };
      const beforeText = Editor.string(editor, range) as keyof typeof SHORTCUTS;
      const type = SHORTCUTS[beforeText];

      if (type) {
        Transforms.select(editor, range);
        Transforms.delete(editor);
        const newProperties: Partial<SlateElement> = {
          type,
        };
        Transforms.setNodes<SlateElement>(editor, newProperties, {
          match: (n) => Editor.isBlock(editor, n),
        });

        if (type === "list-item") {
          const list: SlateBulletedList = {
            type: "bulleted-list",
            children: [],
          };
          Transforms.wrapNodes(editor, list, {
            match: (n) =>
              !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === "list-item",
          });
        }

        return;
      }
    }

    insertText(text);
  };

  editor.deleteBackward = (...args) => {
    const { selection } = editor;

    if (selection && Range.isCollapsed(selection)) {
      const match = Editor.above(editor, {
        match: (n) => Editor.isBlock(editor, n),
      });

      if (match) {
        const [block, path] = match;
        const start = Editor.start(editor, path);

        if (
          !Editor.isEditor(block) &&
          SlateElement.isElement(block) &&
          block.type !== "paragraph" &&
          Point.equals(selection.anchor, start)
        ) {
          const newProperties: Partial<SlateElement> = {
            type: "paragraph",
          };
          Transforms.setNodes(editor, newProperties);

          if (block.type === "list-item") {
            Transforms.unwrapNodes(editor, {
              match: (n) =>
                !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === "bulleted-list",
              split: true,
            });
          }

          return;
        }
      }

      deleteBackward(...args);
    }
  };

  return editor;
};
