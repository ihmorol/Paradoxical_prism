import React from 'react';
import { useRouteError, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate();
    console.error(error);

    return (
        <div className="flex flex-col h-screen w-full relative bg-background text-white overflow-hidden items-center justify-center p-4">
             <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(31,32,41,0)_0%,rgba(11,12,16,1)_100%),linear-gradient(0deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:40px_40px] pointer-events-none opacity-40"></div>
            
            <div className="relative z-10 max-w-lg w-full text-center space-y-6 p-8 bg-panel-bg/50 backdrop-blur-sm border border-border-dark rounded-2xl shadow-2xl">
                <div className="w-20 h-20 mx-auto rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20">
                    <span className="material-symbols-outlined text-4xl text-red-500">warning</span>
                </div>
                
                <div className="space-y-2">
                    <h1 className="text-4xl font-display font-bold uppercase tracking-tight text-white mb-2">
                        System <span className="text-red-500">Malfunction</span>
                    </h1>
                    <p className="text-gray-400 font-mono text-sm">
                        CRITICAL ERROR DETECTED. NAVIGATION SYSTEM COMPROMISED.
                    </p>
                </div>

                <div className="bg-black/40 p-4 rounded-lg border border-red-500/10 text-left overflow-auto max-h-40">
                    <p className="font-mono text-xs text-red-400">
                        {error?.statusText || error?.message || "Unknown Error Occurred"}
                    </p>
                    {error?.response?.data?.message && (
                        <p className="font-mono text-xs text-gray-500 mt-1">
                            Details: {error.response.data.message}
                        </p>
                    )}
                </div>

                <div className="pt-4 flex justify-center gap-4">
                    <Button 
                        onClick={() => navigate('/')} 
                        className="bg-primary hover:bg-orange-600 text-white font-display uppercase tracking-widest px-8"
                    >
                        Return to Base
                    </Button>
                    <Button 
                        variant="outline"
                        onClick={() => window.location.reload()} 
                        className="border-gray-700 text-gray-400 hover:text-white hover:bg-white/5 font-display uppercase tracking-widest"
                    >
                        Re-initialize
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
