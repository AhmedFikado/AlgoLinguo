import { createContext, useContext, useState } from "react";

interface ProgressState {
	newbie: boolean;
	intermediate: boolean;
	master: boolean;
}
interface ProgressContextType {
	progress: ProgressState;
	setProgress: React.Dispatch<React.SetStateAction<ProgressState>>;
}
interface ProgressProviderProps {
	children: React.ReactNode;
}

const ProgressContext = createContext<ProgressContextType | null>(null);

export function ProgressProvider({ children }: ProgressProviderProps) {
	const [progress, setProgress] = useState<ProgressState>({
		newbie: false,
		intermediate: false,
		master: false,
	});

	return (
		<ProgressContext.Provider value={{ progress, setProgress }}>
			{children}
		</ProgressContext.Provider>
	);
}

export function useProgress() {
	const context = useContext(ProgressContext);
	if (!context) {
		throw new Error("Problem ");
	}
	return context;
}
