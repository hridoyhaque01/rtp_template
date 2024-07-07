import React, { useRef, useState } from "react";

// Function to convert markdown to HTML
const parseMarkdown = (markdown) => {
  // Convert bold text
  let html = markdown.replace(/\*\*(.*?)\*\*/gim, "<b>$1</b>");

  // Convert italic text
  html = html.replace(/\*(.*?)\*/gim, "<i>$1</i>");

  // Convert underline text
  html = html.replace(/__(.*?)__/gim, "<u>$1</u>");

  // Convert font size
  html = html.replace(/\{(\d+)\}(.*?)\{\/\d+\}/gim, (match, size, text) => {
    return `<span style="font-size: ${size}px">${text}</span>`;
  });

  return html;
};

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState("");
  const textareaRef = useRef(null);

  const handleChange = (event) => {
    setMarkdown(event.target.value);
  };

  const wrapSelectedText = (before, after) => {
    const textarea = textareaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end);
    const newText = before + selectedText + after;
    setMarkdown(
      markdown.substring(0, start) + newText + markdown.substring(end)
    );
    textarea.focus();
    textarea.setSelectionRange(
      start + before.length,
      start + before.length + selectedText.length
    );
  };

  return (
    <div className="">
      <div className="flex items-center gap-4 mb-6">
        <button className="btn" onClick={() => wrapSelectedText("**", "**")}>
          Bold
        </button>
        <button className="btn" onClick={() => wrapSelectedText("*", "*")}>
          Italic
        </button>
        <button className="btn" onClick={() => wrapSelectedText("__", "__")}>
          Underline
        </button>
        <button
          className="btn"
          onClick={() => wrapSelectedText("{20}", "{/20}")}
        >
          Font Size 20
        </button>
      </div>
      <textarea
        ref={textareaRef}
        value={markdown}
        onChange={handleChange}
        rows="10"
        cols="50"
        placeholder="Type your markdown here..."
        className="bg-white text-navy-50 border border-gray-300 rounded-lg p-4 w-full h-96"
      />
      <div>
        <h2>Preview</h2>
        <div dangerouslySetInnerHTML={{ __html: parseMarkdown(markdown) }} />
      </div>
    </div>
  );
};

export default MarkdownEditor;
