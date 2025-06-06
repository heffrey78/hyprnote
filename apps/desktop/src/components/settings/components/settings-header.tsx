import { useLingui } from "@lingui/react/macro";
// import { Trans, useLingui } from "@lingui/react/macro";
// import { FilePlusIcon } from "lucide-react";

// import { Button } from "@hypr/ui/components/ui/button";
// import { Tooltip, TooltipContent, TooltipTrigger } from "@hypr/ui/components/ui/tooltip";
import { type Tab } from "./types";

interface SettingsHeaderProps {
  current: Tab;
  onCreateTemplate?: () => void;
}

export function SettingsHeader({ current, onCreateTemplate }: SettingsHeaderProps) {
  const { t } = useLingui();

  const getTabTitle = (tab: string) => {
    switch (tab) {
      case "general":
        return t`General`;
      case "profile":
        return t`Profile`;
      case "ai":
        return t`AI`;
      case "calendar":
        return t`Calendar`;
      case "notifications":
        return t`Notifications`;
      case "templates":
        return t`Templates`;
      case "extensions":
        return t`Extensions`;
      case "team":
        return t`Team`;
      case "billing":
        return t`Billing`;
      default:
        return tab;
    }
  };

  return (
    <header data-tauri-drag-region className="h-11 w-full flex items-center justify-between border-b px-2">
      <div className="w-40" data-tauri-drag-region></div>

      <h1 className="text-md font-semibold capitalize" data-tauri-drag-region>
        {getTabTitle(current)}
      </h1>

      <div className="flex w-40 items-center justify-end" data-tauri-drag-region>
        {
          /* {current === "templates" && onCreateTemplate && (
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="flex items-center gap-1 text-sm"
                onClick={onCreateTemplate}
              >
                <FilePlusIcon className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <Trans>Create new template</Trans>
            </TooltipContent>
          </Tooltip>
        )} */
        }
      </div>
    </header>
  );
}
