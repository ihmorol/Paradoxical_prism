import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../lib/api/client';
import { toast } from 'sonner';

const ReviewerConsoleDetail = () => {
    const { id } = useParams();
    const queryClient = useQueryClient();

    const { data: report, isLoading, error } = useQuery({
        queryKey: ['report', id],
        queryFn: async () => {
            const response = await api.get(`/reports/${id}`);
            return response.data.data;
        },
        enabled: !!id,
    });

    const mutation = useMutation({
        mutationFn: async (newStatus) => {
            const response = await api.patch(`/reports/${id}`, { status: newStatus });
            return response.data.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['report', id]);
            queryClient.invalidateQueries(['reports']);
            toast.success('Report status updated.');
        },
        onError: (err) => {
            toast.error('Failed to update status: ' + err.message);
        },
    });

    if (isLoading) return <div className="text-white text-center mt-20">Decrypting File...</div>;
    if (error) return <div className="text-red-500 text-center mt-20">Access Denied: {error.message}</div>;
    if (!report) return <div className="text-white text-center mt-20">Report not found.</div>;

    const handleStatusUpdate = () => {
        const nextStatus = report.status === 'new' ? 'processing' : report.status === 'processing' ? 'completed' : 'processing';
        mutation.mutate(nextStatus);
    };

    return (
        <div className="flex flex-col h-full bg-dark-bg text-gray-300 font-body overflow-hidden relative p-4 lg:p-6 max-w-[1600px] mx-auto w-full">
            <div className="fixed inset-0 bg-[size:40px_40px] bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] opacity-[0.07] pointer-events-none"></div>
            <div className="scanline"></div>

            <main className="flex-1 p-6 flex flex-col gap-6 overflow-hidden relative z-0">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 shrink-0">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-green-900/30 text-green-500 border border-green-500/20 uppercase tracking-wider">Secure Connection</span>
                            <span className="h-px w-8 bg-border-dark"></span>
                        </div>
                        <h1 className="font-display text-3xl font-bold text-white uppercase tracking-wider">
                            Reviewer Console <span className="text-primary text-lg align-top opacity-80">v2.4</span>
                        </h1>
                    </div>
                </div>

                <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-0">
                    <div className="lg:col-span-4 flex flex-col gap-5 overflow-y-auto custom-scrollbar pr-2">
                        <div className="bg-panel-bg border border-border-dark rounded-lg p-5 relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-1 h-full bg-primary/50"></div>
                            <h2 className="font-display text-white text-lg font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary text-xl">folder_shared</span> Asset Status
                            </h2>
                            <div className="grid grid-cols-2 gap-3 mb-5 relative z-10">
                                <div className="bg-black/40 p-3 rounded border border-white/5">
                                    <div className="text-[10px] uppercase tracking-wider text-gray-500 mb-1">Clearance</div>
                                    <div className="text-xl font-display font-bold text-white flex items-center gap-1">
                                        LVL 5 <span className="material-symbols-outlined text-primary text-sm">verified_user</span>
                                    </div>
                                </div>
                                <div className="bg-black/40 p-3 rounded border border-white/5">
                                    <div className="text-[10px] uppercase tracking-wider text-gray-500 mb-1">Status</div>
                                    <div className="text-xl font-display font-bold text-white flex items-center gap-1 uppercase">
                                        {report.status}
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-3 relative z-10 text-sm">
                                <div className="flex justify-between border-b border-white/5 pb-2">
                                    <span className="text-gray-500 uppercase text-xs font-bold">Category</span>
                                    <span className="font-mono text-white">{report.category}</span>
                                </div>
                                <div className="flex justify-between border-b border-white/5 pb-2">
                                    <span className="text-gray-500 uppercase text-xs font-bold">Location</span>
                                    <span className="font-mono text-white">{report.location_context}</span>
                                </div>
                                <div className="flex justify-between border-b border-white/5 pb-2">
                                    <span className="text-gray-500 uppercase text-xs font-bold">Date</span>
                                    <span className="font-mono text-white">{new Date(report.created_at).toLocaleDateString()}</span>
                                </div>
                            </div>
                        </div>

                        {report.image && (
                            <div className="bg-panel-bg border border-border-dark rounded-lg p-5">
                                <h2 className="font-display text-white text-lg font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary text-xl">image</span> Evidence
                                </h2>
                                <img src={report.image} alt="Evidence" className="w-full rounded border border-white/10" />
                            </div>
                        )}
                    </div>

                    <div className="lg:col-span-8 flex flex-col h-full bg-panel-bg border border-border-dark rounded-lg overflow-hidden relative shadow-2xl">
                        <div className="bg-black/40 border-b border-border-dark h-12 flex items-center justify-between px-4 shrink-0">
                           <div className="flex items-center gap-3">
                                <span className="font-mono text-xs text-primary/80 tracking-wide">ID: {report.report_id}</span>
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto custom-scrollbar p-8 bg-black/20 font-mono relative">
                            <div className="absolute top-10 right-10 pointer-events-none opacity-5">
                                <span className="material-symbols-outlined text-[12rem]">lock_open</span>
                            </div>
                            <div className="max-w-3xl mx-auto space-y-6">
                                <div className="border-b border-primary/20 pb-4 mb-8">
                                    <h3 className="text-2xl text-white font-bold mb-2 font-display tracking-wider">DECRYPTED PAYLOAD</h3>
                                </div>
                                <p className="text-primary font-bold text-sm tracking-widest border-l-2 border-primary pl-3">&gt;&gt;&gt; BEGIN DECRYPTION SEQUENCE</p>
                                <p className="text-gray-300 leading-relaxed text-sm">
                                    {report.description || "No text content available."}
                                </p>
                                <p className="text-primary font-bold text-sm tracking-widest border-l-2 border-primary pl-3">&gt;&gt;&gt; END OF MESSAGE</p>
                            </div>
                        </div>

                        <div className="bg-panel-bg border-t border-border-dark p-4 flex items-center justify-between shrink-0 relative z-20">
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                <span>Connected</span>
                            </div>
                            <div className="flex gap-3">
                                <button onClick={handleStatusUpdate} disabled={mutation.isPending} className="relative overflow-hidden group px-6 py-2.5 rounded bg-primary text-white font-display font-bold uppercase tracking-widest text-xs shadow-[0_0_15px_rgba(255,102,0,0.3)] hover:bg-orange-700 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-sm">save</span>
                                    {mutation.isPending ? 'Updating...' : `Mark as ${report.status === 'new' ? 'Processing' : 'Completed'}`}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ReviewerConsoleDetail;
